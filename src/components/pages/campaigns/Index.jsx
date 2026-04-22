"use client";
import Heading from "@/components/atoms/Heading";
import { Target, Users } from "lucide-react";
import Campaigns from "./Campaigns";
import { useState } from "react";
import UserGroup from "./UserGroup";
import CampaignGroup from "./CampaignGroup";

const MainCompaigns = () => {
  const [activeTab, setActiveTab] = useState("Campaigns");
  const tabs = [
    { name: "Campaigns", icon: <Target size={18} /> },
    { name: "User Groups", icon: <Users size={18} /> },
  ];
  return (
    <div>
      <Heading
        title="Campaign & Group Management"
        paragraph="Manage campaigns, assign user groups, and deploy strategies"
        actions={[
          { text: "Create Group", variant: "outline", icon: "Save" },
          { text: "New Campaign", variant: "primary", icon: "Play" },
        ]}
      />
      <div className="rounded">
        <div className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 py-4 px-1 text-sm font-medium transition-all relative ${
                activeTab === tab.name
                  ? "text-blue-500"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {tab.icon}
              {tab.name}

              {activeTab === tab.name && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-5">
        {activeTab === "Campaigns" && <Campaigns />}

        {activeTab === "User Groups" && <UserGroup/>}
        <CampaignGroup/>
      </div>
    </div>
  );
};

export default MainCompaigns;
