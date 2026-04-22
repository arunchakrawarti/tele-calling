import { MapPin } from 'lucide-react';
import React from 'react'

const GeographicAnalytics = () => {
    const cityRecovery = [
  { city: "Mumbai", recovery: 285000, customers: 342 },
  { city: "Delhi", recovery: 215000, customers: 256 },
  { city: "Bangalore", recovery: 165000, customers: 198 },
  { city: "Hyderabad", recovery: 95000, customers: 128 },
  { city: "Pune", recovery: 82000, customers: 95 },
];
  return (
    <div>
      <div className="bg-custom-dark rounded-lg border border-gray-800 p-6 mt-5">
        <h3 className="h1 mb-4">
          <MapPin className="w-5 h-5 inline mr-2" />
          Geographic Performance Analysis
        </h3>
        <div className="space-y-4">
          {cityRecovery.map((city) => (
            <div key={city.city} className="p-4 bg-gray-800/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-white">{city.city}</h4>
                <span className="text-2xl font-bold text-green-400">
                  ₹{(city.recovery / 1000).toFixed(0)}K
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{city.customers} customers</span>
                <span>Avg: ₹{Math.round(city.recovery / city.customers).toLocaleString()}</span>
              </div>
              <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${(city.recovery / 285000) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GeographicAnalytics
