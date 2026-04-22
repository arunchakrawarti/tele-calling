"use client";
import React from "react";

const CampaignGroup = () => {
  const points = [
    "Each campaign targets specific customer segments (DPD range, product type, etc.)",
    "User groups (tele-calling & field teams) are assigned to campaigns",
    "Strategies are deployed to campaigns and execute in sequence",
    "AI bots work campaign-wise alongside human groups",
    "Human agents in a group only see customers from their assigned campaigns",
  ];

  return (
    <div className="w-full">
      <div className="bg-[#0b1f3a] border border-blue-500/30 rounded-xl p-5 text-blue-200 shadow-sm">
        <h2 className="text-blue-400 font-semibold text-md mb-2">
          How Campaign-Group System Works
        </h2>
        <div className="">
          {points.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
            
              <span className="text-blue-400">
                <i className="ri-checkbox-circle-line text-lg"></i>
              </span>
              <p className="text-sm leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CampaignGroup;