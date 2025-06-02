import { useParams, Link } from "wouter";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Home } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

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
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#dd1c1c]/10 text-[#dd1c1c] text-sm font-medium mb-4">
                {formattedDate}
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