"use client";
import React from "react";
import {
  Settings,
  Eye,
  Pause,
  GitBranch,
  Users,
  Bot,
  Plus,
} from "lucide-react";

const CampaignCard = ({ data }) => {
  const {
    title,
    status,
    totalCustomers,
    contacted,
    coverage,
    ptps,
    recovery,
    strategy,
    assignedGroups,
    botActive,
  } = data;

  const statsData = [
    {
      label: "Total Customers",
      value: totalCustomers.toLocaleString(),
    },
    {
      label: "Contacted",
      value: contacted.toLocaleString(),
      subValue: `${coverage}% coverage`,
    },
    {
      label: "PTPs",
      value: ptps.toLocaleString(),
    },
    {
      label: "Recovery",
      value: `₹${recovery}`,
      valueClass: "text-green-500",
    },
  ];

  return (
    <div className="bg-custom-dark border border-gray-700 text-gray-300 p-4 sm:p-6 rounded-xl w-full mb-6 font-inter">

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
        <div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              {title}
            </h2>
            <span
              className={`px-3 py-0.5 rounded-full text-xs font-medium ${
                status === "Active"
                  ? "bg-green-900/30 text-green-500"
                  : "bg-gray-700/50 text-gray-400"
              }`}
            >
              {status}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            {totalCustomers.toLocaleString()} customers •{" "}
            {assignedGroups.length} groups assigned
          </p>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 text-gray-400">
          {status === "Active" && (
            <Pause size={18} className="cursor-pointer hover:text-white" />
          )}
          <Settings size={18} className="cursor-pointer hover:text-white" />
          <Eye size={18} className="cursor-pointer hover:text-white" />
        </div>
      </div>

     
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
        {statsData.map((item, index) => (
          <StatBox key={index} {...item} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

        <div className="bg-[#161922] border border-gray-700 p-4 rounded-lg flex flex-col justify-between min-h-[100px]">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <GitBranch size={14} className="text-purple-500" />
            Deployed Strategy
          </div>

          <div className="flex justify-between items-end mt-2">
            <span
              className={
                strategy
                  ? "text-gray-200"
                  : "text-blue-500 flex items-center gap-1 cursor-pointer"
              }
            >
              {strategy ? (
                strategy
              ) : (
                <>
                  <Plus size={16} /> Deploy Strategy
                </>
              )}
            </span>

            {strategy && (
              <button className="text-blue-500 text-sm hover:underline">
                Edit
              </button>
            )}
          </div>
        </div>
        <div className="bg-[#161922] border border-gray-700 p-4 rounded-lg flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <Users size={14} className="text-orange-400" />
            Assigned Groups
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 mt-2">
            
            <div className="flex gap-2 flex-wrap">
              {assignedGroups.length > 0 ? (
                assignedGroups.map((group, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-900/20 border border-blue-800 text-blue-400 px-2 sm:px-3 py-0.5 rounded text-xs sm:text-sm"
                  >
                    {group}
                  </span>
                ))
              ) : (
                <span className="text-blue-500 flex items-center gap-1 cursor-pointer text-sm">
                  <Plus size={16} /> Assign Groups
                </span>
              )}
            </div>

            {assignedGroups.length > 0 && (
              <button className="text-blue-500 text-sm hover:underline self-end">
                Manage
              </button>
            )}
          </div>
        </div>
      </div>
      <div
        className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 ${
          botActive
            ? "bg-purple-900/10 border-purple-800/50"
            : "bg-purple-900/10 border-purple-800/50"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-purple-800/30">
            <Bot
              size={20}
              className={botActive ? "text-purple-400" : "text-gray-500"}
            />
          </div>

          <div>
            <h4 className="text-sm font-bold text-white">
              AI Bot Execution
            </h4>
            <p className="text-xs text-gray-400">
              {botActive
                ? "Running automated calls and messages"
                : "AI execution disabled"}
            </p>
          </div>
        </div>
        <div
          className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${
            botActive ? "bg-purple-600" : "bg-gray-600"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
              botActive ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

const StatBox = ({
  label,
  value,
  subValue,
  valueClass = "text-white",
}) => (
  <div className="bg-[#161922] p-3 sm:p-4 rounded-lg border border-gray-700">
    <p className="text-xs text-gray-500 mb-1">{label}</p>
    <p className={`text-lg sm:text-xl md:text-2xl font-bold ${valueClass}`}>
      {value}
    </p>
    {subValue && (
      <p className="text-xs text-gray-500 mt-1">{subValue}</p>
    )}
  </div>
);

export default CampaignCard;