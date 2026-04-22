import React from 'react'

const CampaignStrategy = () => {
  const instructions = [
    "Each strategy is deployed to a specific campaign",
    "Execution follows the chain sequentially from top to bottom",
    "Data is picked from selected sources and used in actions",
    "Decision nodes route customers to different paths based on conditions",
    "Human agents are assigned in groups per campaign",
    "AI bots execute automatically based on campaign schedule"
  ];

  return (
    <div className="bg-custom-dark  rounded w-full">
      <h2 className="text-[#3b82f6] text-lg font-semibold mb-4 tracking-wide">
        Campaign-Based Strategy Execution
      </h2>
      <ul className="space-y-1">
        {instructions.map((text, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-[#94a3b8] flex-shrink-0" />
        
            <span className="text-[#94a3b8] text-[15px] leading-relaxed">
              {text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CampaignStrategy