import React from 'react';
import { Heart, Activity, Leaf, Zap, ExternalLink, Star } from 'lucide-react';
import AffiliateDisclosure from '../components/AffiliateDisclosure';
import CommissionBadge from '../components/CommissionBadge';

const HealthWellness = () => {
  const programs = [
    {
      name: 'Organifi',
      description: 'Premium organic superfood supplements and wellness products',
      commission: 'Up to 30%',
      cookieDuration: '30 days',
      features: ['Organic superfoods', 'Plant-based nutrition', 'Wellness supplements'],
      rating: 4.7,
      link: 'https://organifi.com/?ref=techtoolsreviews',
      type: 'high' as const
    },
    {
      name: 'Fitbit',
      description: 'Leading fitness tracker and health monitoring devices',
      commission: 'Up to 8%',
      cookieDuration: '30 days',
      features: ['Fitness tracking', 'Health monitoring', 'Sleep analysis'],
      rating: 4.5,
      link: 'https://fitbit.com/?ref=techtoolsreviews',
      type: 'medium' as const
    },
    {
      name: 'Theragun',
      description: 'Professional-grade percussive therapy devices',
      commission: 'Up to $50',
      cookieDuration: '30 days',
      features: ['Muscle recovery', 'Pain relief', 'Professional grade'],
      rating: 4.6,
      link: 'https://theragun.com/?ref=techtoolsreviews',
      type: 'standard' as const
    },
    {
      name: 'Mindvalley',
      description: 'Personal transformation and mindfulness education platform',
      commission: 'Up to 50%',
      cookieDuration: '60 days',
      features: ['Personal development', 'Mindfulness courses', 'Life coaching'],
      rating: 4.4,
      link: 'https://mindvalley.com/?ref=techtoolsreviews',
      type: 'high' as const
    }
  ];

  const benefits = [
    {
      icon: Activity,
      title: 'Growing Industry',
      description: 'Health and wellness is a multi-billion dollar industry growing rapidly.'
    },
    {
      icon: Leaf,
      title: 'High-Value Products',
      description: 'Premium wellness products command higher prices and commissions.'
    },
    {
      icon: Zap,
      title: 'Passionate Audience',
      description: 'Health-conscious consumers are highly engaged and loyal.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Heart className="h-16 w-16 text-green-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Health & Wellness Products
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Promote premium health and wellness products to an audience that values quality. 
              From supplements to fitness gear - high commissions on products people love.
            </p>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 inline-block">
              <div className="text-2xl font-bold">Commission Range: Up to 50%</div>
              <div className="text-green-200">On premium wellness products</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AffiliateDisclosure />

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Health & Wellness Affiliate Marketing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <benefit.icon className="h-6 w-6 text-green-600" />
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
            Top Health & Wellness Programs
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
                      className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center transition-all duration-300 transform hover:scale-105"
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
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
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
                          <span className="font-medium text-green-600">{program.commission}</span>
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
        <section className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Wellness Journey</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Join the most profitable health and wellness affiliate programs. 
            Perfect for fitness influencers, health bloggers, and wellness coaches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mindvalley.com/?ref=techtoolsreviews"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Start with Mindvalley (50%)
            </a>
            <a
              href="https://organifi.com/?ref=techtoolsreviews"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Try Organifi (30%)
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HealthWellness;