import React from 'react';
import { TrendingUp, DollarSign, Shield, Calendar, ExternalLink, Star } from 'lucide-react';
import AffiliateDisclosure from '../components/AffiliateDisclosure';
import CommissionBadge from '../components/CommissionBadge';

const FinanceInvesting = () => {
  const programs = [
    {
      name: 'Capitalist Exploits',
      description: 'Premium investment research and analysis for sophisticated investors',
      commission: '$787 - $1,749',
      cookieDuration: '365 days',
      features: ['High-net-worth focus', 'Institutional-grade research', 'Global market analysis'],
      rating: 4.9,
      link: 'https://capitalistexploits.com/?ref=techtoolsreviews',
      type: 'high' as const
    },
    {
      name: 'Personal Capital (Empower)',
      description: 'Wealth management platform for high-net-worth individuals',
      commission: '$100 - $115',
      cookieDuration: '30 days',
      features: ['Free financial tools', 'Investment tracking', 'Retirement planning'],
      rating: 4.7,
      link: 'https://personalcapital.com/?ref=techtoolsreviews',
      type: 'medium' as const
    },
    {
      name: 'Coinbase',
      description: 'Leading cryptocurrency exchange and wallet platform',
      commission: '50% of trading fees (3 months)',
      cookieDuration: '30 days',
      features: ['Beginner-friendly', 'Secure platform', 'Multiple cryptocurrencies'],
      rating: 4.5,
      link: 'https://coinbase.com/?ref=techtoolsreviews',
      type: 'high' as const
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'High Commission Rates',
      description: 'Earn up to $1,749 per successful referral with our premium finance partners.'
    },
    {
      icon: Shield,
      title: 'Trusted Platforms',
      description: 'All recommended platforms are established, regulated, and trusted by millions.'
    },
    {
      icon: Calendar,
      title: 'Long Cookie Duration',
      description: 'Extended tracking periods up to 365 days give your referrals time to convert.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <TrendingUp className="h-16 w-16 text-green-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Finance & Investing Opportunities
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Access premium investment platforms and financial tools with exceptional commission rates. 
              Perfect for audiences interested in wealth building and financial independence.
            </p>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 inline-block">
              <div className="text-2xl font-bold">Commission Range: $100 - $1,749</div>
              <div className="text-green-200">Per successful conversion</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AffiliateDisclosure />

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Finance Affiliate Marketing?
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
            Top Finance & Investment Programs
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
                      className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center transition-all duration-300 transform hover:scale-105"
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
        <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Join thousands of successful affiliates promoting premium finance and investment opportunities. 
            Start with our highest-converting programs and scale your income.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://capitalistexploits.com/?ref=techtoolsreviews"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Start with Capitalist Exploits
            </a>
            <a
              href="https://personalcapital.com/?ref=techtoolsreviews"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Try Personal Capital
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FinanceInvesting;