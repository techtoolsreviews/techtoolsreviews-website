import React from 'react';
import { Laptop, Zap, Users, BarChart3, ExternalLink, Star } from 'lucide-react';
import AffiliateDisclosure from '../components/AffiliateDisclosure';
import CommissionBadge from '../components/CommissionBadge';

const TechnologyTools = () => {
  const programs = [
    {
      name: 'HubSpot',
      description: 'All-in-one marketing, sales, and customer service platform',
      commission: 'Up to $1,000',
      cookieDuration: '90 days',
      features: ['CRM & Marketing Hub', 'Sales automation', 'Customer service tools'],
      rating: 4.8,
      link: 'https://hubspot.com/?ref=techtoolsreviews',
      type: 'high' as const
    },
    {
      name: 'Shopify',
      description: 'Leading e-commerce platform for online stores',
      commission: 'Up to $2,000',
      cookieDuration: '30 days',
      features: ['Easy store setup', 'Payment processing', 'Marketing tools'],
      rating: 4.7,
      link: 'https://shopify.com/?ref=techtoolsreviews',
      type: 'high' as const
    },
    {
      name: 'ClickFunnels',
      description: 'Sales funnel builder and marketing automation platform',
      commission: '30% recurring',
      cookieDuration: '30 days',
      features: ['Drag-drop builder', 'A/B testing', 'Email automation'],
      rating: 4.5,
      link: 'https://clickfunnels.com/?ref=techtoolsreviews',
      type: 'medium' as const
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'High-Converting Products',
      description: 'Business software that companies actually need and use daily.'
    },
    {
      icon: Users,
      title: 'Large Target Audience',
      description: 'Every business needs tools - massive addressable market.'
    },
    {
      icon: BarChart3,
      title: 'Recurring Commissions',
      description: 'Many programs offer ongoing monthly commissions.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Laptop className="h-16 w-16 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Technology Tools & Software
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Promote the most essential business software and technology tools. 
              High commissions from platforms every business needs to succeed.
            </p>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 inline-block">
              <div className="text-2xl font-bold">Commission Range: Up to $2,000</div>
              <div className="text-blue-200">Plus recurring payments on many programs</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AffiliateDisclosure />

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Tech Tools Affiliate Marketing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
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
            Top Technology Affiliate Programs
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
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center transition-all duration-300 transform hover:scale-105"
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
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
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
                          <span className="font-medium text-blue-600">{program.commission}</span>
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
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Start Promoting Tech Tools Today</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join the most profitable affiliate programs in the technology space. 
            These tools are essential for modern businesses - high conversion rates guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://shopify.com/?ref=techtoolsreviews"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Start with Shopify ($2,000)
            </a>
            <a
              href="https://hubspot.com/?ref=techtoolsreviews"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Try HubSpot ($1,000)
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TechnologyTools;