"use client"
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 450000 },
  { name: 'Tue', value: 520000 },
  { name: 'Wed', value: 480000 },
  { name: 'Thu', value: 610000 },
  { name: 'Fri', value: 580000 },
  { name: 'Sat', value: 300000 },
  { name: 'Sun', value: 280000 },
];

const CallsOverviewChart = () => {
  return (
    <div className="bg-custom-dark border border-gray-700 rounded-2xl p-6 w-full h-[400px]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="h1">Calls Overview</h3>
          <p className="text-gray-400 text-sm">Hourly call distribution</p>
        </div>
        <div className="flex">
          <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-medium">Today</button>
          <button className="text-gray-400 px-4 py-1 text-xs font-medium">Week</button>
          <button className="text-gray-400 px-4 py-1 text-xs font-medium">Month</button>
        </div>
      </div>

      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#262b3f" />
            <XAxis dataKey="name" axisLine={true} tickLine={true} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
            <YAxis axisLine={true} tickLine={true} tick={{fill: '#6b7280', fontSize: 12}} />
            <Tooltip content={<CustomTooltip />} cursor={{stroke: '#ffffff', strokeWidth: 1}} />
            <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CallsOverviewChart;
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-custom-dark border border-gray-700 p-4 rounded-xl shadow-2xl">
        <p className="text-white font-bold mb-1">{label}</p>
        <p className="text-blue-400 text-sm">
          recovery : <span className="font-semibold">₹{(payload[0].value / 100000).toFixed(1)}L</span>
        </p>
      </div>
    );
  }
  return null;
};