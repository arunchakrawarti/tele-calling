import React from 'react';
import { Phone, PhoneIncoming, PhoneMissed, Clock, TrendingUp, TrendingDown } from 'lucide-react';

const StatsCard = ({ title, value, trend, isPositive, Icon }) => {
  return (
    <div className="bg-custom-dark border border-gray-700 rounded-xl sm:rounded-2xl p-6 w-full  min-w-[240px] shadow-lg">
      <div className="flex justify-between items-start mb-6">
        <span className="text-gray-400 text-sm font-medium font-inter">{title}</span>
        <div className={`p-2 rounded-xl ${isPositive ? 'bg-blue-500/10 text-blue-400' : 'bg-purple-500/10 text-purple-400'}`}>
          <Icon size={20} />
        </div>
      </div>

      <div className="space-y-1">
        <h2 className="text-white text-4xl font-semibold ">{value}</h2>
        <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span>{trend} vs yesterday</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;