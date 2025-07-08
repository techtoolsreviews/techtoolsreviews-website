import React from 'react';
import { AlertCircle } from 'lucide-react';

const AffiliateDisclosure = () => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
      <div className="flex items-start space-x-3">
        <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-blue-800">
          <p className="font-medium mb-1">Affiliate Disclosure</p>
          <p>
            This page contains affiliate links. We may earn a commission when you make a purchase 
            through these links, at no additional cost to you. This helps us maintain our site and 
            continue providing valuable reviews and recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AffiliateDisclosure;