import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  slug: string;
  published: boolean;
  coverImage?: string;
  tags?: string;
}

const POSTS_FILE = path.join(__dirname, '..', 'content', 'blog', 'posts.json');

export class BlogStorage {
  private async readPosts(): Promise<BlogPost[]> {
    try {
      const data = await fs.readFile(POSTS_FILE, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      // If file doesn't exist, return empty array
      return [];
    }
  }

  private async writePosts(posts: BlogPost[]): Promise<void> {
    await fs.writeFile(POSTS_FILE, JSON.stringify(posts, null, 2), 'utf-8');
  }

  async getAllPosts(): Promise<BlogPost[]> {
    return await this.readPosts();
  }

  async getPublishedPosts(): Promise<BlogPost[]> {
    const posts = await this.readPosts();
    return posts.filter(post => post.published);
  }

  async getPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const posts = await this.readPosts();
    return posts.find(post => post.slug === slug);
  }

  async getPostById(id: string): Promise<BlogPost | undefined> {
    const posts = await this.readPosts();
    return posts.find(post => post.id === id);
  }

  async createPost(post: Omit<BlogPost, 'id'>): Promise<BlogPost> {
    const posts = await this.readPosts();
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString(),
    };
    posts.push(newPost);
    await this.writePosts(posts);
    return newPost;
  }

  async updatePost(id: string, updates: Partial<BlogPost>): Promise<BlogPost | undefined> {
    const posts = await this.readPosts();
    const index = posts.findIndex(post => post.id === id);

    if (index === -1) {
      return undefined;
    }

    posts[index] = { ...posts[index], ...updates, id }; // Preserve ID
    await this.writePosts(posts);
    return posts[index];
  }

  async deletePost(id: string): Promise<boolean> {
    const posts = await this.readPosts();
    const filteredPosts = posts.filter(post => post.id !== id);

    if (filteredPosts.length === posts.length) {
      return false; // Post not found
    }

    await this.writePosts(filteredPosts);
    return true;
  }

  async generateSlug(title: string): Promise<string> {
    const baseSlug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    const posts = await this.readPosts();
    const existingSlugs = posts.map(p => p.slug);

    let slug = baseSlug;
    let counter = 1;

    while (existingSlugs.includes(slug)) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    return slug;
  }
}

export const blogStorage = new BlogStorage();
