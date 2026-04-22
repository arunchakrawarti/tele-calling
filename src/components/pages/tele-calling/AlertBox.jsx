import React from "react";
import { AlertCircle } from "lucide-react";

const AlertBox = () => {
  return (
   <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-yellow-400">
              Quality Alert: Script Deviation
            </p>
            <p className="text-sm text-yellow-300/80">
              Agent Sonia Mehta deviated from approved script in Call #4521. Auto QA flagged for review.
            </p>
            <button className="mt-2 text-sm text-yellow-400 font-medium hover:text-yellow-300">
              Review Recording →
            </button>
          </div>
        </div>
      </div>
  );
};

export default AlertBox;