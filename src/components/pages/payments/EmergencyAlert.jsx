import { CheckCircle } from "lucide-react";

const EmergencyAlert = () => {
  return (
    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-5">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-green-400">
              🎯 Payment Detected - Emergency Recall Activated
            </p>
            <p className="text-sm text-green-300">
              Customer "Rajesh Kumar" made payment of ₹25,000 at 10:30 AM. 
              All active workflows stopped • AI calls cancelled • Agent screen locked • Field agent notified
            </p>
            <p className="text-xs text-green-400 mt-2">
              System Response Time: 0.8 seconds
            </p>
          </div>
        </div>
      </div>
  );
};

export default EmergencyAlert;