import { useParams, Link } from "wouter";
import { ArrowLeft, Home, Share2, Facebook, Twitter, Linkedin, Copy, Check } from "lucide-react";
import { useState, useEffect } from "react";

interface BlogPost {
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

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchPost(slug);
    }
  }, [slug]);

  const fetchPost = async (postSlug: string) => {
    try {
      const response = await fetch(`/api/blog/posts/${postSlug}`);
      if (response.ok) {
        const data = await response.json();
        setPost(data);
      } else {
        setPost(null);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      setPost(null);
    } finally {
      setIsLoading(false);
    }
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const socialImageUrl = typeof window !== 'undefined' ? `${window.location.origin}/paintbackground.PNG` : '';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link');
    }
  };

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&picture=${encodeURIComponent(socialImageUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post?.title || '')}&via=PatriotPainting`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Set meta tags for social media sharing
  useEffect(() => {
    if (post && typeof window !== 'undefined') {
      // Update document title
      document.title = `${post.title} | Patriot Painting Blog`;
      
      // Remove existing meta tags
      const existingMetas = document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"], meta[name="description"]');
      existingMetas.forEach(meta => meta.remove());
      
      // Add Open Graph meta tags
      const metaTags = [
        { property: 'og:title', content: post.title },
        { property: 'og:description', content: post.excerpt },
        { property: 'og:image', content: socialImageUrl },
        { property: 'og:url', content: currentUrl },
        { property: 'og:type', content: 'article' },
        { property: 'og:site_name', content: 'Patriot Painting' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: post.title },
        { name: 'twitter:description', content: post.excerpt },
        { name: 'twitter:image', content: socialImageUrl },
        { name: 'description', content: post.excerpt }
      ];
      
      metaTags.forEach(({ property, name, content }) => {
        const meta = document.createElement('meta');
        if (property) meta.setAttribute('property', property);
        if (name) meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      });
    }
    
    return () => {
      // Cleanup on unmount
      if (typeof window !== 'undefined') {
        document.title = 'Patriot Painting';
        const metasToRemove = document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]');
        metasToRemove.forEach(meta => meta.remove());
      }
    };
  }, [post, socialImageUrl, currentUrl]);

  // Close share dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const shareElement = document.querySelector('.share-dropdown');
      if (shareElement && !shareElement.contains(event.target as Node)) {
        setShareOpen(false);
      }
    };

    if (shareOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [shareOpen]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-[#dd1c1c] hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-[#dd1c1c] hover:text-[#b71c1c] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <Link 
            href="/" 
            className="inline-flex items-center text-[#0a3161] hover:text-[#dd1c1c] transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
        
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#dd1c1c]/10 text-[#dd1c1c] text-sm font-medium">
                  {formattedDate}
                </div>
                
                {/* Share Button */}
                <div className="relative share-dropdown">
                  <button
                    onClick={() => setShareOpen(!shareOpen)}
                    className="inline-flex items-center px-4 py-2 bg-[#0a3161] hover:bg-[#dd1c1c] text-white rounded-lg transition-colors duration-300"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </button>
                  
                  {shareOpen && (
                    <div className="absolute right-0 top-12 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-64 z-50">
                      <h4 className="font-medium text-gray-900 mb-3">Share this article</h4>
                      
                      <div className="space-y-2">
                        <a
                          href={shareUrls.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center w-full px-3 py-2 text-left hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Facebook className="w-4 h-4 mr-3 text-blue-600" />
                          Share on Facebook
                        </a>
                        
                        <a
                          href={shareUrls.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center w-full px-3 py-2 text-left hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Twitter className="w-4 h-4 mr-3 text-blue-400" />
                          Share on Twitter
                        </a>
                        
                        <a
                          href={shareUrls.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center w-full px-3 py-2 text-left hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Linkedin className="w-4 h-4 mr-3 text-blue-700" />
                          Share on LinkedIn
                        </a>
                        
                        <button
                          onClick={handleCopyLink}
                          className="flex items-center w-full px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          {copied ? (
                            <Check className="w-4 h-4 mr-3 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4 mr-3 text-gray-600" />
                          )}
                          {copied ? 'Link Copied!' : 'Copy Link'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-[#0a3161] prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </article>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact Patriot Painting for your Western New York painting project.
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center bg-[#dd1c1c] hover:bg-[#b71c1c] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;