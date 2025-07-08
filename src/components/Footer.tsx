import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Mail, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">TechToolsReviews</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted source for expert reviews and exclusive access to premium opportunities 
              across technology, finance, travel, and lifestyle categories.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Shield className="h-4 w-4" />
              <span>Trusted by thousands of professionals worldwide</span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/finance-investing" className="hover:text-blue-400 transition-colors">Finance & Investing</Link></li>
              <li><Link to="/technology-tools" className="hover:text-blue-400 transition-colors">Technology Tools</Link></li>
              <li><Link to="/luxury-travel" className="hover:text-blue-400 transition-colors">Luxury Travel</Link></li>
              <li><Link to="/home-improvement" className="hover:text-blue-400 transition-colors">Home Improvement</Link></li>
              <li><Link to="/health-wellness" className="hover:text-blue-400 transition-colors">Health & Wellness</Link></li>
              <li><Link to="/education-development" className="hover:text-blue-400 transition-colors">Education</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Affiliate Disclosure</a></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              Stay Updated
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Get exclusive access to new reviews and premium opportunities.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 TechToolsReviews.com. All rights reserved.</p>
          <p className="mt-1">
            <strong>Affiliate Disclosure:</strong> We may earn commissions from qualifying purchases made through links on this site.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;