import React from 'react';
import { Home, Hammer, Shield, Lightbulb, ExternalLink, Star } from 'lucide-react';
import AffiliateDisclosure from '../components/AffiliateDisclosure';
import CommissionBadge from '../components/CommissionBadge';

const HomeImprovement = () => {
  const programs = [
    {
      name: 'Wayfair',
      description: 'Leading online destination for everything home',
      commission: 'Up to 8%',
      cookieDuration: '30 days',
      features: ['Furniture & decor', 'Home improvement', 'Outdoor living'],
      rating: 4.4,
      link: 'https://wayfair.com/?ref=techtoolsreviews',
      type: 'medium' as const
    },
    {
      name: 'SimpliSafe',
      description: 'Award-winning home security system',
      commission: 'Up to $100',
      cookieDuration: '30 days',
      features: ['Wireless security', 'Professional monitoring', 'Smart home integration'],
      rating: 4.6,
      link: 'https://simplisafe.com/?ref=techtoolsreviews',
      type: 'medium' as const
    },
    {
      name: 'Purple Mattress',
      description: 'Revolutionary comfort technology for better sleep',
      commission: 'Up to $50',
      cookieDuration: '30 days',
      features: ['Innovative gel grid', '100-night trial', 'Free shipping & returns'],
      rating: 4.5,
      link: 'https://purple.com/?ref=techtoolsreviews',
      type: 'standard' as const
    },
    {
      name: 'Home Depot',
      description: 'The world\'s largest home improvement retailer',
      commission: 'Up to 8%',
      cookieDuration: '7 days',
      features: ['Tools & hardware', 'Building materials', 'Installation services'],
      rating: 4.3,
      link: 'https://homedepot.com/?ref=techtoolsreviews',
      type: 'medium' as const
    }
  ];

  const benefits = [
    {
      icon: Hammer,
      title: 'Growing Market',
      description: 'Home improvement spending continues to rise year over year.'
    },
    {
      icon: Lightbulb,
      title: 'High-Ticket Items',
      description: 'Home improvement purchases are often high-value transactions.'
    },
    {
      icon: Shield,
      title: 'Trusted Brands',
      description: 'Partner with household names consumers already know and trust.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Home className="h-16 w-16 text-orange-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Home Improvement & Living
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Tap into the booming home improvement market. From furniture to security systems, 
              homeowners are constantly investing in their living spaces.
            </p>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 inline-block">
              <div className="text-2xl font-bold">Commission Range: Up to $100</div>
              <div className="text-orange-200">Plus percentage-based commissions up to 8%</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AffiliateDisclosure />

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Home Improvement Affiliate Marketing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                  <benefit.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Programs Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Top Home Improvement Programs
          </h2>
          <div className="space-y-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.name}</h3>
                      <div className="flex items-center space-x-4">
                        <CommissionBadge amount={program.commission} type={program.type} />
                        <div className="flex items-center text-yellow-500">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="ml-1 text-gray-700 font-medium">{program.rating}</span>
                        </div>
                      </div>
                    </div>
                    <a
                      href={program.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center transition-all duration-300 transform hover:scale-105"
                    >
                      Join Program
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </div>

                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {program.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Program Details:</h4>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex justify-between">
                          <span>Commission:</span>
                          <span className="font-medium text-orange-600">{program.commission}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Cookie Duration:</span>
                          <span className="font-medium">{program.cookieDuration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rating:</span>
                          <span className="font-medium">{program.rating}/5.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Home Improvement Content</h2>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Start monetizing your home and lifestyle content with these trusted brands. 
            Perfect for DIY bloggers, home improvement enthusiasts, and lifestyle influencers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://simplisafe.com/?ref=techtoolsreviews"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Start with SimpliSafe ($100)
            </a>
            <a
              href="https://wayfair.com/?ref=techtoolsreviews"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Try Wayfair (8%)
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeImprovement;