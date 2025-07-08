import React from 'react';
import { PlaneTakeoff, MapPin, Shield, Globe, ExternalLink, Star } from 'lucide-react';
import AffiliateDisclosure from '../components/AffiliateDisclosure';
import CommissionBadge from '../components/CommissionBadge';

const LuxuryTravel = () => {
  const programs = [
    {
      name: 'Luxury Escapes',
      description: 'Premium travel deals and luxury resort bookings worldwide',
      commission: 'Up to 6%',
      cookieDuration: '30 days',
      features: ['Luxury hotels & resorts', 'Exclusive deals', 'Package holidays'],
      rating: 4.6,
      link: 'https://luxuryescapes.com/?ref=techtoolsreviews',
      type: 'medium' as const
    },
    {
      name: 'Agoda',
      description: 'Global hotel booking platform with extensive Asia-Pacific coverage',
      commission: 'Up to 7%',
      cookieDuration: '30 days',
      features: ['Wide hotel selection', 'Competitive rates', 'Mobile-first platform'],
      rating: 4.5,
      link: 'https://agoda.com/?ref=techtoolsreviews',
      type: 'medium' as const
    },
    {
      name: 'World Nomads',
      description: 'Travel insurance for adventurous travelers and digital nomads',
      commission: '10%',
      cookieDuration: '30 days',
      features: ['Adventure coverage', 'Digital nomad plans', 'Flexible policies'],
      rating: 4.4,
      link: 'https://worldnomads.com/?ref=techtoolsreviews',
      type: 'standard' as const
    },
    {
      name: 'Travala',
      description: 'Crypto-friendly travel booking platform with rewards',
      commission: '5% + 0.5% revenue share',
      cookieDuration: '30 days',
      features: ['Crypto payments', 'Loyalty rewards', 'Hotels & flights'],
      rating: 4.3,
      link: 'https://travala.com/?ref=techtoolsreviews',
      type: 'standard' as const
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Evergreen Market',
      description: 'Travel is a trillion-dollar industry with constant demand.'
    },
    {
      icon: MapPin,
      title: 'High-Value Bookings',
      description: 'Luxury travel bookings mean higher commission amounts.'
    },
    {
      icon: Shield,
      title: 'Trusted Brands',
      description: 'Partner with established, reputable travel companies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <PlaneTakeoff className="h-16 w-16 text-purple-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Luxury Travel & Tourism
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Promote premium travel experiences and earn from the world's most profitable industry. 
              From luxury resorts to travel insurance - every traveler needs these services.
            </p>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 inline-block">
              <div className="text-2xl font-bold">Commission Range: 5% - 10%</div>
              <div className="text-purple-200">On high-value travel bookings</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AffiliateDisclosure />

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Travel Affiliate Marketing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                  <benefit.icon className="h-6 w-6 text-purple-600" />
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
            Top Travel Affiliate Programs
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
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center transition-all duration-300 transform hover:scale-105"
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
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
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
                          <span className="font-medium text-purple-600">{program.commission}</span>
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
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Travel Affiliate Journey</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Join the most lucrative travel affiliate programs and start earning from every booking. 
            Perfect for travel bloggers, influencers, and content creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://agoda.com/?ref=techtoolsreviews"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Start with Agoda (7%)
            </a>
            <a
              href="https://luxuryescapes.com/?ref=techtoolsreviews"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Try Luxury Escapes (6%)
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LuxuryTravel;