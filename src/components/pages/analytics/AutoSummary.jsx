import React from 'react'

const AutoSummary = () => {
  return (
    <div>
      <div className="bg-custom-dark rounded mt-5">
        <h3 className="mb-4 h1">Auto QA Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <p className="text-sm text-green-400 font-medium mb-2">
              Compliant Calls
            </p>
            <p className="text-3xl font-bold text-green-400">92%</p>
            <p className="text-xs text-green-400/70 mt-1">456/498 calls</p>
          </div>
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <p className="text-sm text-yellow-400 font-medium mb-2">
              Script Deviations
            </p>
            <p className="text-3xl font-bold text-yellow-400">28</p>
            <p className="text-xs text-yellow-400/70 mt-1">Flagged for review</p>
          </div>
          <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p className="text-sm text-red-400 font-medium mb-2">
              Compliance Violations
            </p>
            <p className="text-3xl font-bold text-red-400">3</p>
            <p className="text-xs text-red-400/70 mt-1">Requires immediate action</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AutoSummary
