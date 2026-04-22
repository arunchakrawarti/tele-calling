import React from 'react'

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex border-b border-white/10 mt-5">
      <button
        onClick={() => setActiveTab("payments")}
        className={`px-6 py-3 ${
          activeTab === "payments"
            ? "text-blue-400 border-b-2 border-blue-500"
            : "text-gray-400"
        }`}
      >
       Recents Payments
      </button>

      <button
        onClick={() => setActiveTab("ptps")}
        className={`px-6 py-3 ${
          activeTab === "ptps"
            ? "text-blue-400 border-b-2 border-blue-500"
            : "text-gray-400"
        }`}
      >
        Promises to Pay
      </button>
    </div>
  )
}

export default Tabs
