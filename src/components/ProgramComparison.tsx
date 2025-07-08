import React from 'react';
import { TrendingUp, DollarSign, Clock, Star } from 'lucide-react';

const ProgramComparison = () => {
  const topPrograms = [
    {
      name: "Capitalist Exploits",
      category: "Finance",
      commission: "$1,749",
      cookieDays: 365,
      rating: 4.9,
      conversionRate: "8.5%",
      color: "bg-green-500"
    },
    {
      name: "Shopify",
      category: "E-commerce",
      commission: "$2,000",
      cookieDays: 30,
      rating: 4.7,
      conversionRate: "12.3%",
      color: "bg-blue-500"
    },
    {
      name: "HubSpot",
      category: "Marketing",
      commission: "$1,000",
      cookieDays: 90,
      rating: 4.8,
      conversionRate: "15.2%",
      color: "bg-orange-500"
    },
    {
      name: "Mindvalley",
      category: "Education",
      commission: "50%",
      cookieDays: 60,
      rating: 4.4,
      conversionRate: "9.7%",
      color: "bg-purple-500"
    },
    {
      name: "Agoda",
      category: "Travel",
      commission: "7%",
      cookieDays: 30,
      rating: 4.5,
      conversionRate: "6.8%",
      color: "bg-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Performing Programs Comparison
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare the highest-converting affiliate programs across all categories. 
            Data based on real performance metrics from our community.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-lg">
            <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Program</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Commission</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Cookie Duration</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Rating</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Conversion Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {topPrograms.map((program, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 ${program.color} rounded-full mr-3`}></div>
                      <span className="text-sm font-medium text-gray-900">{program.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{program.category}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-green-600 mr-1" />
                      <span className="text-sm font-semibold text-green-600">{program.commission}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-blue-600 mr-1" />
                      <span className="text-sm text-gray-900">{program.cookieDays} days</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1 fill-current" />
                      <span className="text-sm font-medium text-gray-900">{program.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-purple-600 mr-1" />
                      <span className="text-sm font-semibold text-purple-600">{program.conversionRate}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$1,749</div>
            <div className="text-sm text-green-700 font-medium">Highest Single Commission</div>
            <div className="text-xs text-green-600 mt-1">Capitalist Exploits</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15.2%</div>
            <div className="text-sm text-blue-700 font-medium">Best Conversion Rate</div>
            <div className="text-xs text-blue-600 mt-1">HubSpot Marketing Hub</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">365</div>
            <div className="text-sm text-purple-700 font-medium">Longest Cookie Duration</div>
            <div className="text-xs text-purple-600 mt-1">Capitalist Exploits</div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start with the Best?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of successful affiliates who are earning substantial income 
            with these top-performing programs.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramComparison;