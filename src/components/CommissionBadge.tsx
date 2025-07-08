import React from 'react';
import { DollarSign } from 'lucide-react';

interface CommissionBadgeProps {
  amount: string;
  type?: 'high' | 'medium' | 'standard';
}

const CommissionBadge: React.FC<CommissionBadgeProps> = ({ amount, type = 'standard' }) => {
  const getColorClasses = () => {
    switch (type) {
      case 'high':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getColorClasses()}`}>
      <DollarSign className="h-3 w-3 mr-1" />
      {amount} Commission
    </div>
  );
};

export default CommissionBadge;