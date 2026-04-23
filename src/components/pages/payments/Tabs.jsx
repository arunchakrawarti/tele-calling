import React, { useState } from 'react'
import PaymentMethods from './PaymentMethods';
import PromisToPay from './PromisToPay';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("PaymentMethod");

  const tabs = [
    { name: "PaymentMethod" },
    { name: "PromisToPay" },
  ];
  return (
   <div className="mt-5 bg-custom-dark rounded">
    
      <div className="flex border-b border-gray-800">
        <div className="flex gap-10">
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
              {tab.name}

              {activeTab === tab.name && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mt-5">
        {activeTab === "PaymentMethod" && <PaymentMethods />}
        {activeTab === "PromisToPay" && <PromisToPay />}
      </div>

    </div>
  )
}

export default Tabs
