"use client";
import Heading from "@/components/atoms/Heading";
import Input from "@/components/common/Input";
import React, { useState } from "react";
import { Settings, Plus } from "lucide-react";
import CampaignStrategy from "./CampaignStrategy";
import StrategyFlow from "./StrategyFlow";

const MainStrategy = () => {
  const [campaign, setCampaign] = useState(
    "DPD 30-60 Recovery (1250 customers)",
  );
  return (
    <div className="space-y-6">
      <Heading
        title="Strategy Builder"
        paragraph="Create campaign-specific collection strategies with detailed execution chains"
        selectOptions={[
          "DPD 30-60 Recovery (1250 customers)",
          "DPD 60-90 Recovery (800 customers)",
          "High Risk Collection (400 customers)",
        ]}
        selectedValue={campaign}
        onSelectChange={setCampaign}
        actions={[
          { text: "Save Draft", variant: "outline", icon: "Save" },
          { text: "Deploy to Campaign", variant: "primary", icon: "Play" },
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-8 space-y-5">
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 bg-[#141a2b] border border-gray-800 p-4 md:p-6 rounded-xl">
            <div className="flex-1">
              <Input
                label="Strategy Name"
                placeholder="New Collection Strategy"
              />
            </div>
            <div className="flex-1">
              <Input
                label="Execution Priority"
                type="select"
                placeholder="High Priority"
                options={["High Priority", "Medium Priority", "Low Priority"]}
              />
            </div>
          </div>
          <StrategyFlow />
        </div>
        <div className="md:col-span-4 space-y-5">
          <div className="bg-[#141a2b] border border-gray-800 p-6 md:p-8 rounded-xl flex flex-col items-center justify-center text-center min-h-[200px] md:min-h-[300px]">
            <div className="mb-4 md:mb-6">
              <Settings
                className="w-10 h-10 md:w-14 md:h-14 text-[#3d4b66]"
                strokeWidth={1.5}
              />
            </div>
            <p className="text-[#94a3b8] text-sm md:text-lg leading-relaxed max-w-[200px]">
              Select a node to configure its parameters
            </p>
          </div>
          <div className="bg-[#141a2b] border border-gray-800 p-4 md:p-6 rounded-xl space-y-4">
            <h3 className="text-white text-base md:text-lg font-semibold">
              Campaign Info
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-xs md:text-sm">
                  Campaign Name
                </p>
                <p className="text-gray-200 font-medium text-sm md:text-base">
                  DPD 30-60 Recovery
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-xs md:text-sm">
                  Total Customers
                </p>
                <p className="text-gray-200 text-lg md:text-xl font-bold">
                  1,250
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-xs md:text-sm mb-1">Status</p>
                <span className="bg-[#064e3b] text-[#34d399] px-2 md:px-3 py-1 rounded-md text-xs font-medium">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CampaignStrategy />
    </div>
  );
};

export default MainStrategy;
