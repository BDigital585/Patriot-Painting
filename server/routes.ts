import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { blogStorage } from "./blogStorage";
import { z } from "zod";

// Define the contact form schema for validation
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

// Blog post schema for validation
const blogPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  excerpt: z.string().optional().default(""),
  content: z.string().min(1, "Content is required"),
  coverImage: z.string().optional().default(""),
  tags: z.string().optional().default(""),
  published: z.boolean().default(false),
  date: z.string(),
});

// PIN verification schema
const pinSchema = z.object({
  pin: z.string().length(4, "PIN must be 4 digits"),
});

// Simple in-memory session store for admin tokens
const adminSessions = new Set<string>();

// Middleware to verify admin token
function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token || !adminSessions.has(token)) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized"
    });
  }

  next();
}

// Generate a simple token
function generateToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);

      // Log the contact form submission (in a real app, you might save to a database or send an email)
      console.log("Contact form submission:", validatedData);

      // Return success response
      res.status(200).json({
        success: true,
        message: "Thank you for your message. We'll be in touch soon."
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Return validation errors
        res.status(400).json({
          success: false,
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      } else {
        // Return general error
        res.status(500).json({
          success: false,
          message: "An error occurred while processing your request."
        });
      }
    }
  });

  // === Public Blog API Endpoints ===

  // Get all published blog posts
  app.get("/api/blog/posts", async (req: Request, res: Response) => {
    try {
      const posts = await blogStorage.getPublishedPosts();
      // Sort by date, newest first
      posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      res.json(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch blog posts"
      });
    }
  });

  // Get single blog post by slug
  app.get("/api/blog/posts/:slug", async (req: Request, res: Response) => {
    try {
      const post = await blogStorage.getPostBySlug(req.params.slug);

      if (!post) {
        return res.status(404).json({
          success: false,
          message: "Post not found"
        });
      }

      // Only return if published (unless admin)
      const token = req.headers.authorization?.replace('Bearer ', '');
      const isAdmin = token && adminSessions.has(token);

      if (!post.published && !isAdmin) {
        return res.status(404).json({
          success: false,
          message: "Post not found"
        });
      }

      res.json(post);
    } catch (error) {
      console.error("Error fetching post:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch blog post"
      });
    }
  });

  // === Admin PIN Verification ===

  app.post("/api/admin/verify-pin", async (req: Request, res: Response) => {
    try {
      const { pin } = pinSchema.parse(req.body);
      const correctPin = process.env.ADMIN_PIN || "1234";

      if (pin === correctPin) {
        const token = generateToken();
        adminSessions.add(token);

        // Auto-expire token after 8 hours
        setTimeout(() => {
          adminSessions.delete(token);
        }, 8 * 60 * 60 * 1000);

        res.json({
          success: true,
          token
        });
      } else {
        res.status(401).json({
          success: false,
          message: "Invalid PIN"
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: error.errors[0].message
        });
      } else {
        res.status(500).json({
          success: false,
          message: "An error occurred"
        });
      }
    }
  });

  // Logout endpoint
  app.post("/api/admin/logout", async (req: Request, res: Response) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (token) {
      adminSessions.delete(token);
    }
    res.json({ success: true });
  });

  // === Admin Blog API Endpoints (Protected) ===

  // Get all posts (including drafts) for admin
  app.get("/api/admin/posts", requireAdmin, async (req: Request, res: Response) => {
    try {
      const posts = await blogStorage.getAllPosts();
      // Sort by date, newest first
      posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      res.json(posts);
    } catch (error) {
      console.error("Error fetching admin posts:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch posts"
      });
    }
  });

  // Create new blog post
  app.post("/api/admin/posts", requireAdmin, async (req: Request, res: Response) => {
    try {
      const validatedData = blogPostSchema.parse(req.body);
      const newPost = await blogStorage.createPost(validatedData);
      res.status(201).json(newPost);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      } else {
        console.error("Error creating post:", error);
        res.status(500).json({
          success: false,
          message: "Failed to create post"
        });
      }
    }
  });

  // Update blog post
  app.put("/api/admin/posts/:id", requireAdmin, async (req: Request, res: Response) => {
    try {
      const validatedData = blogPostSchema.partial().parse(req.body);
      const updatedPost = await blogStorage.updatePost(req.params.id, validatedData);

      if (!updatedPost) {
        return res.status(404).json({
          success: false,
          message: "Post not found"
        });
      }

      res.json(updatedPost);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      } else {
        console.error("Error updating post:", error);
        res.status(500).json({
          success: false,
          message: "Failed to update post"
        });
      }
    }
  });

  // Delete blog post
  app.delete("/api/admin/posts/:id", requireAdmin, async (req: Request, res: Response) => {
    try {
      const success = await blogStorage.deletePost(req.params.id);

      if (!success) {
        return res.status(404).json({
          success: false,
          message: "Post not found"
        });
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting post:", error);
      res.status(500).json({
        success: false,
        message: "Failed to delete post"
      });
    }
  });

  // Generate slug from title
  app.post("/api/admin/generate-slug", requireAdmin, async (req: Request, res: Response) => {
    try {
      const { title } = req.body;
      if (!title) {
        return res.status(400).json({
          success: false,
          message: "Title is required"
        });
      }

      const slug = await blogStorage.generateSlug(title);
      res.json({ slug });
    } catch (error) {
      console.error("Error generating slug:", error);
      res.status(500).json({
        success: false,
        message: "Failed to generate slug"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
