import React from 'react';
import { Quote, Star, TrendingUp } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: "Sarah M.",
      role: "Finance Blogger",
      earnings: "$15,000/month",
      story: "Started with Capitalist Exploits recommendations. Now earning $15K monthly from just 3 high-value finance programs.",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      programs: ["Capitalist Exploits", "Personal Capital", "Coinbase"]
    },
    {
      name: "Mike R.",
      role: "Tech Reviewer",
      earnings: "$8,500/month",
      story: "Focused on Shopify and HubSpot. The $2,000 Shopify commissions changed everything for my business.",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400",
      programs: ["Shopify", "HubSpot", "ClickFunnels"]
    },
    {
      name: "Lisa K.",
      role: "Travel Influencer",
      earnings: "$12,000/month",
      story: "Luxury travel programs are goldmines. Agoda and Luxury Escapes provide consistent 6-figure income.",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      programs: ["Agoda", "Luxury Escapes", "World Nomads"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our community members are building substantial income streams 
            with the programs we recommend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{story.name}</h3>
                  <p className="text-gray-600">{story.role}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-2xl font-bold text-green-600">{story.earnings}</span>
                </div>
                <div className="flex items-center text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>

              <div className="relative mb-6">
                <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 italic pl-6">"{story.story}"</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Top Programs:</h4>
                <div className="flex flex-wrap gap-2">
                  {story.programs.map((program, programIndex) => (
                    <span 
                      key={programIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg inline-block">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Join Our Success Community
            </h3>
            <p className="text-gray-600 mb-4">
              Get exclusive access to the same strategies and programs our top earners use.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;