import { Link } from "wouter";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight, Calendar, Home } from "lucide-react";
import { useEffect } from "react";

const Blog = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div 
        className="relative bg-cover bg-center bg-fixed blog-hero-bg"
        style={{
          backgroundImage: `url('/paintbackground.PNG')`
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative z-10 bg-white/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
            <Link 
              href="/" 
              className="inline-flex items-center text-[#dd1c1c] hover:text-[#b71c1c] transition-colors mb-8"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#dd1c1c]/10 text-[#dd1c1c] text-sm font-medium mb-4">
                Blog
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Painting Tips & Insights</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert advice, project showcases, and industry insights from the Patriot Painting team.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => {
              const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });
              
              return (
                <article 
                  key={post.id} 
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                >
                  <div className="p-8">
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formattedDate}
                    </div>
                    
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0a3161] transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-[#dd1c1c] hover:text-[#b71c1c] font-medium transition-colors group-hover:translate-x-1 transform duration-300"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;