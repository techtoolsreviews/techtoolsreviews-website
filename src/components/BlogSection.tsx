import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Top 5 Investment Platforms for High-Net-Worth Individuals in 2025",
      excerpt: "Discover exclusive investment opportunities with commissions up to $1,749 per referral. We analyze Capitalist Exploits, Personal Capital, and other premium platforms.",
      category: "Finance & Investing",
      date: "January 15, 2025",
      author: "TechTools Team",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/blog/investment-platforms-2025",
      featured: true
    },
    {
      title: "Shopify vs. WooCommerce: Which E-commerce Platform Pays More?",
      excerpt: "Compare the top e-commerce platforms and their affiliate programs offering up to $2,000 per merchant.",
      category: "Technology Tools",
      date: "January 12, 2025",
      author: "TechTools Team",
      image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/blog/shopify-vs-woocommerce-2025"
    },
    {
      title: "Luxury Travel Affiliate Programs: Earn While You Inspire Wanderlust",
      excerpt: "Explore premium travel affiliate opportunities with commissions up to 7% on luxury bookings.",
      category: "Luxury Travel",
      date: "January 10, 2025",
      author: "TechTools Team",
      image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/blog/luxury-travel-affiliate-programs"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Reviews & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our expert analysis of the highest-paying affiliate programs and emerging opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className={`group ${post.featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
              <Link to={post.link} className="block">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className={`relative ${post.featured ? 'h-64 lg:h-80' : 'h-48'}`}>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    {post.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          FEATURED
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className={`p-6 ${post.featured ? 'lg:p-8' : ''}`}>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <User className="h-4 w-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    
                    <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors ${post.featured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                      {post.title}
                    </h3>
                    
                    <p className={`text-gray-600 mb-4 leading-relaxed ${post.featured ? 'text-lg' : ''}`}>
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                      <span>Read Full Review</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Reviews
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;