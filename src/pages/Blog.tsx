import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';
import AffiliateDisclosure from '../components/AffiliateDisclosure';

const Blog = () => {
  const blogPosts = [
    {
      title: "Top 5 Investment Platforms for High-Net-Worth Individuals in 2025",
      excerpt: "Discover exclusive investment opportunities with commissions up to $1,749 per referral. We analyze Capitalist Exploits, Personal Capital, and other premium platforms.",
      category: "Finance & Investing",
      date: "January 15, 2025",
      author: "TechTools Team",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/blog/investment-platforms-2025",
      featured: true,
      readTime: "8 min read"
    },
    {
      title: "Shopify vs. WooCommerce: Which E-commerce Platform Pays More?",
      excerpt: "Compare the top e-commerce platforms and their affiliate programs. Shopify offers up to $2,000 per merchant while WooCommerce provides different opportunities.",
      category: "Technology Tools",
      date: "January 12, 2025",
      author: "TechTools Team",
      image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/blog/shopify-vs-woocommerce-2025",
      readTime: "6 min read"
    },
    {
      title: "Luxury Travel Affiliate Programs: Earn While You Inspire Wanderlust",
      excerpt: "Explore premium travel affiliate opportunities with commissions up to 7% on luxury bookings. From Agoda to Luxury Escapes, find the best programs.",
      category: "Luxury Travel",
      date: "January 10, 2025",
      author: "TechTools Team",
      image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/blog/luxury-travel-affiliate-programs",
      readTime: "7 min read"
    },
    {
      title: "Home Improvement Affiliate Gold Mine: SimpliSafe to Wayfair",
      excerpt: "The home improvement market is booming. Learn how to capitalize on high-commission programs from SimpliSafe ($100 per sale) to Wayfair (8% commission).",
      category: "Home Improvement",
      date: "January 8, 2025",
      author: "TechTools Team",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/blog/home-improvement-affiliate-programs",
      readTime: "5 min read"
    },
    {
      title: "Health & Wellness Affiliate Programs That Actually Convert",
      excerpt: "From Mindvalley's 50% commissions to Organifi's 30% rates, discover the wellness programs that generate real income for affiliates.",
      category: "Health & Wellness",
      date: "January 5, 2025",
      author: "TechTools Team",
      image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/blog/health-wellness-affiliate-programs",
      readTime: "6 min read"
    },
    {
      title: "Education Affiliate Programs: MasterClass vs. Coursera Commission Battle",
      excerpt: "Both offer 45% commissions, but which converts better? Our detailed analysis of the top education affiliate programs and their earning potential.",
      category: "Education",
      date: "January 3, 2025",
      author: "TechTools Team",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/blog/education-affiliate-programs",
      readTime: "9 min read"
    }
  ];

  const categories = [
    "All Categories",
    "Finance & Investing", 
    "Technology Tools",
    "Luxury Travel",
    "Home Improvement",
    "Health & Wellness",
    "Education"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert Reviews & Insights
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              In-depth analysis of the highest-paying affiliate programs across all major industries. 
              Stay ahead with our expert recommendations and earning strategies.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AffiliateDisclosure />

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search reviews and insights..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <select className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Review</h2>
          <article className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    FEATURED
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{blogPosts[0].date}</span>
                  <span className="mx-2">•</span>
                  <User className="h-4 w-4 mr-2" />
                  <span>{blogPosts[0].author}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                
                <Link 
                  to={blogPosts[0].link}
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Read Full Review
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* Blog Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article key={index} className="group">
                <Link to={post.link} className="block">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                    <div className="relative h-48">
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
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss a High-Paying Opportunity</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get exclusive access to new affiliate programs, insider tips, and earning strategies 
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;