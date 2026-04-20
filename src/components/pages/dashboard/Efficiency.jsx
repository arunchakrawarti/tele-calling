import React from 'react';

const Efficiency = () => {
  const percentage = 85;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-[#161b2e] border border-gray-700 rounded-2xl p-6 h-full flex flex-col items-center">
      <h3 className="text-white text-lg font-semibold self-start mb-12">Call Efficiency</h3>
      
      <div className="relative flex items-center justify-center flex-grow">
        <svg className="w-48 h-48 transform -rotate-90">
          <circle cx="96" cy="96" r={radius} stroke="#1e2235" strokeWidth="12" fill="transparent" />
          <circle 
            cx="96" cy="96" r={radius} stroke="url(#blueGradient)" strokeWidth="12" fill="transparent"
            strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
          />
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d2ff" />
              <stop offset="100%" stopColor="#3a7bd5" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute text-white text-5xl font-bold">{percentage}%</span>
      </div>
      
      <p className="text-gray-400 text-sm">Answer rate</p>
    </div>
  );
};

export default Efficiency;