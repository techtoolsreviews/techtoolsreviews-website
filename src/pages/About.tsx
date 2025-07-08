import React from 'react';
import { Shield, Award, Users, TrendingUp, Target, Heart, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Transparency First",
      description: "Every affiliate relationship is clearly disclosed. We believe in honest, upfront communication about how we earn and why we recommend specific programs."
    },
    {
      icon: Target,
      title: "Quality Over Quantity",
      description: "We carefully vet every program we recommend. Only the highest-paying, most reliable affiliate opportunities make it to our platform."
    },
    {
      icon: Heart,
      title: "Community Success",
      description: "Your success is our success. We're committed to helping our community build sustainable, profitable affiliate businesses."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      bio: "Former VP of Partnerships at a Fortune 500 tech company. 12+ years in affiliate marketing with over $50M in tracked commissions.",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Research",
      bio: "Ex-Goldman Sachs analyst specializing in fintech and investment platforms. Expert in high-value financial affiliate programs.",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Emily Thompson",
      role: "Content Director",
      bio: "Award-winning tech journalist with 8+ years covering SaaS, e-commerce, and digital marketing tools. Published in TechCrunch and Forbes.",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Founded",
      description: "Started as a small blog reviewing affiliate programs"
    },
    {
      year: "2021",
      title: "10K Users",
      description: "Reached our first 10,000 trusted users"
    },
    {
      year: "2023",
      title: "$1M Milestone",
      description: "Community earned over $1M in commissions"
    },
    {
      year: "2025",
      title: "50K+ Community",
      description: "Now serving 50,000+ professionals worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About TechToolsReviews
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We're on a mission to democratize access to high-paying affiliate opportunities. 
              Founded by industry veterans, we bridge the gap between premium programs and ambitious affiliates.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Statement */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  The affiliate marketing industry is worth over $17 billion, but most affiliates 
                  struggle to find truly profitable opportunities. We change that by providing 
                  exclusive access to premium programs that actually pay.
                </p>
                <p>
                  Every program we feature has been personally tested by our team. We don't just 
                  look at commission rates – we analyze conversion rates, payment reliability, 
                  support quality, and long-term earning potential.
                </p>
                <p>
                  Our goal is simple: help you build a sustainable, profitable affiliate business 
                  by connecting you with the best opportunities in the market.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team collaboration"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-xl shadow-xl">
                <div className="text-2xl font-bold">$2M+</div>
                <div className="text-sm">Community Earnings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-4">{member.role}</div>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-8">By the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-blue-200">Trusted Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$2M+</div>
              <div className="text-blue-200">Commissions Earned</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-200">Programs Reviewed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-200">Trust Rating</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;