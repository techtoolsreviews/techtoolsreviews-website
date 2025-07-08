import React from 'react';
import { GraduationCap, BookOpen, Award, TrendingUp, ExternalLink, Star } from 'lucide-react';
import AffiliateDisclosure from '../components/AffiliateDisclosure';
import CommissionBadge from '../components/CommissionBadge';

const EducationDevelopment = () => {
  const programs = [
    {
      name: 'MasterClass',
      description: 'Premium online classes taught by world-renowned experts',
      commission: 'Up to 45%',
      cookieDuration: '30 days',
      features: ['Celebrity instructors', 'High-quality production', 'Diverse topics'],
      rating: 4.8,
      link: 'https://masterclass.com/?ref=techtoolsreviews',
      type: 'high' as const
    },
    {
      name: 'Coursera',
      description: 'University-level courses and professional certificates',
      commission: 'Up to 45%',
      cookieDuration: '30 days',
      features: ['University partnerships', 'Professional certificates', 'Career services'],
      rating: 4.6,
      link: 'https://coursera.com/?ref=techtoolsreviews',
      type: 'high' as const
    },
    {
      name: 'Teachable',
      description: 'Platform for creating and selling online courses',
      commission: '30% recurring',
      cookieDuration: '30 days',
      features: ['Course creation tools', 'Marketing features', 'Student management'],
      rating: 4.5,
      link: 'https://teachable.com/?ref=techtoolsreviews',
      type: 'medium' as const
    },
    {
      name: 'Skillshare',
      description: 'Creative and business skills learning community',
      commission: '$10 per premium signup',
      cookieDuration: '30 days',
      features: ['Creative focus', 'Project-based learning', 'Community features'],
      rating: 4.4,
      link: 'https://skillshare.com/?ref=techtoolsreviews',
      type: 'standard' as const
    }
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: 'Evergreen Content',
      description: 'Education and skill development never go out of style.'
    },
    {
      icon: Award,
      title: 'High-Value Outcomes',
      description: 'Courses that advance careers justify premium pricing.'
    },
    {
      icon: TrendingUp,
      title: 'Growing Market',
      description: 'Online education market continues rapid expansion globally.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <GraduationCap className="h-16 w-16 text-indigo-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Education & Professional Development
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Promote the best online learning platforms and courses. 
              High commissions from programs that genuinely transform careers and lives.
            </p>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 inline-block">
              <div className="text-2xl font-bold">Commission Range: Up to 45%</div>
              <div className="text-indigo-200">Plus recurring commissions on many programs</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AffiliateDisclosure />

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Education Affiliate Marketing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                  <benefit.icon className="h-6 w-6 text-indigo-600" />
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
            Top Education Affiliate Programs
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
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center transition-all duration-300 transform hover:scale-105"
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
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
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
                          <span className="font-medium text-indigo-600">{program.commission}</span>
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
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Empower Others to Learn and Grow</h2>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Join the most rewarding education affiliate programs and help others advance their careers. 
            Perfect for educators, career coaches, and content creators focused on professional development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://masterclass.com/?ref=techtoolsreviews"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Start with MasterClass (45%)
            </a>
            <a
              href="https://coursera.com/?ref=techtoolsreviews"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Try Coursera (45%)
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EducationDevelopment;