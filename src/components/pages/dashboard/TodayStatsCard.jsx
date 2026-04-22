import React from 'react';
import { Phone, Star } from 'lucide-react';

const TodayStatsCard = () => {
  const percentage = 93; 
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-custom-dark border border-gray-700 rounded-2xl p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="h1">Today</h3>
        <Phone className="text-[#00d2ff]" size={20} />
      </div>
      <div className="text-center py-6 border-b border-gray-800/50">
        <h2 className="text-white text-5xl font-bold tracking-tight">247</h2>
        <p className="text-gray-400 text-sm mt-2">Total calls</p>
      </div>
      <div className="mt-8 flex flex-col items-center">
        <h3 className="h1 self-start mb-10">Performance Rating</h3>
        
        <div className="relative flex items-center justify-center">
          <svg width="150" height="150" className="transform -rotate-90">
            <circle
              cx="75"
              cy="75"
              r={radius}
              stroke="#1e2235"
              strokeWidth="10"
              fill="transparent"
            />
            <circle
              cx="75"
              cy="75"
              r={radius}
              stroke="#10b981" 
              strokeWidth="10"
              fill="transparent"
              strokeDasharray={circumference}
              style={{
                strokeDashoffset: strokeDashoffset,
                transition: 'stroke-dashoffset 0.5s ease',
              }}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <Star className="text-yellow-500 fill-yellow-500 mb-1" size={20} />
            <span className="text-white text-3xl font-bold">9.3</span>
          </div>
        </div>
        
        <p className="text-gray-400 text-sm mt-8">Customer satisfaction</p>
      </div>
    </div>
  );
};

export default TodayStatsCard;