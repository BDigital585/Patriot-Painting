import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Define the contact form schema for validation
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

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

  const httpServer = createServer(app);
  return httpServer;
}
