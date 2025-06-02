const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#dd1c1c]/10 text-[#dd1c1c] text-sm font-medium mb-4">
            Blog
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Painting Tips & Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice, project showcases, and industry insights from the Patriot Painting team.
          </p>
        </div>
        
        {/* Blog content will be added here */}
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">Blog content coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;