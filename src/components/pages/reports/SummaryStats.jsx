import { Calendar, FileText, Filter, TrendingUp } from "lucide-react";
import React from "react";

const SummaryStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-custom-dark  border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-400">Total Reports</p>
          <FileText className="w-5 h-5 text-blue-400" />
        </div>
        <p className="text-3xl font-bold text-white">148</p>
        <p className="text-sm text-gray-500 mt-1">Generated this month</p>
      </div>

      {/* Recovery */}
      <div className="bg-custom-dark  border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-400">Recovery (MTD)</p>
          <TrendingUp className="w-5 h-5 text-green-400" />
        </div>
        <p className="text-3xl font-bold text-white">₹85L</p>
        <p className="text-sm text-green-400 mt-1">+18% vs last month</p>
      </div>

      {/* Calls */}
      <div className="bg-custom-dark  border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-400">Calls Made</p>
          <Calendar className="w-5 h-5 text-purple-400" />
        </div>
        <p className="text-3xl font-bold text-white">5,388</p>
        <p className="text-sm text-gray-500 mt-1">This month</p>
      </div>

      {/* PTPs */}
      <div className="bg-custom-dark  border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-400">PTPs Given</p>
          <Filter className="w-5 h-5 text-orange-400" />
        </div>
        <p className="text-3xl font-bold text-white">691</p>
        <p className="text-sm text-gray-500 mt-1">This month</p>
      </div>

    </div>
  );
};

export default SummaryStats;