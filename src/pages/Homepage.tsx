import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  PlaneTakeoff, 
  Home, 
  Laptop, 
  Heart, 
  GraduationCap,
  ArrowRight,
  Star,
  Users,
  Award
} from 'lucide-react';
import BlogSection from '../components/BlogSection';
import AboutSection from '../components/AboutSection';
import SuccessStories from '../components/SuccessStories';
import ProgramComparison from '../components/ProgramComparison';

const Homepage = () => {
  const categories = [
    {
      icon: TrendingUp,
      title: 'Finance & Investing',
      description: 'Premium investment tools and platforms with commissions up to $1,749 per sale. Featuring Capitalist Exploits insider access.',
      commission: 'Up to $1,749',
      path: '/finance-investing',
      color: 'bg-green-500',
      featured: true
    },
    {
      icon: Laptop,
      title: 'Technology Tools',
      description: 'Business software and productivity tools with high-value commissions',
      commission: 'Up to $2,000',
      path: '/technology-tools',
      color: 'bg-blue-500',
      featured: true
    },
    {
      icon: PlaneTakeoff,
      title: 'Luxury Travel',
      description: 'Exclusive travel experiences and premium booking platforms',
      commission: 'Up to 7%',
      path: '/luxury-travel',
      color: 'bg-purple-500'
    },
    {
      icon: Home,
      title: 'Home Improvement',
      description: 'Premium home solutions and smart technology for modern living',
      commission: 'Up to $100',
      path: '/home-improvement',
      color: 'bg-orange-500'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Top-tier health products and wellness solutions',
      commission: 'Up to 30%',
      path: '/health-wellness',
      color: 'bg-red-500'
    },
    {
      icon: GraduationCap,
      title: 'Education & Development',
      description: 'Professional courses and skill development platforms',
      commission: 'Up to 45%',
      path: '/education-development',
      color: 'bg-indigo-500'
    }
  ];

  const stats = [
    { icon: Users, value: '50K+', label: 'Active Users' },
    { icon: Award, value: '$2M+', label: 'Commissions Earned' },
    { icon: Star, value: '4.9', label: 'Average Rating' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Unlock Premium 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                {' '}Opportunities
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Expert reviews and exclusive access to high-commission affiliate programs. 
              From $787-$2,000+ per conversion opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/finance-investing"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center"
              >
                Explore Premium Opportunities
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <div className="text-sm text-blue-200">
                ⭐ Trusted by 50,000+ professionals worldwide
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-pulse"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Success Stories */}
      <SuccessStories />

      {/* Featured Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Commission Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Carefully curated opportunities with the highest earning potential. 
              Each category features programs with exceptional commission rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {category.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    FEATURED
                  </div>
                )}
                
                <div className="p-8">
                  <div className={`${category.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {category.commission}
                    </div>
                    <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Program Comparison */}
      <ProgramComparison />

      {/* Value Proposition */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose TechToolsReviews?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Expert Curation</h3>
                    <p className="text-blue-100">Hand-picked programs with the highest commission rates and conversion potential.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Transparent Reviews</h3>
                    <p className="text-blue-100">Honest, in-depth analysis of every platform and opportunity we recommend.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Proven Results</h3>
                    <p className="text-blue-100">Join thousands who have successfully monetized their audience through our recommendations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Join our newsletter for exclusive access to new opportunities and insider tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Get Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;