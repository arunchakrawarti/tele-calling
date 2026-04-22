"use client";
import Button from "@/components/common/Button";
import { MapPin, Camera } from "lucide-react";

const recentVisits = [
  {
    id: "V001",
    agent: "Deepak Kumar",
    customer: "Rajesh Kumar",
    time: "9:15 AM",
    status: "Completed",
    outcome: "Payment Collected",
    amount: 25000,
    gpsVerified: true,
    photoProof: true,
  },
  {
    id: "V002",
    agent: "Deepak Kumar",
    customer: "Amit Patel",
    time: "10:30 AM",
    status: "Completed",
    outcome: "PTP Given",
    amount: 0,
    gpsVerified: true,
    photoProof: true,
  },
  {
    id: "V003",
    agent: "Arjun Nair",
    customer: "Sneha Reddy",
    time: "8:45 AM",
    status: "Completed",
    outcome: "Customer Not Found",
    amount: 0,
    gpsVerified: false,
    photoProof: false,
  },
];

const RecentVisits = () => {
  return (
    <div className="bg-custom-dark rounded-lg border border-gray-800 p-4 sm:p-6">
      <h3 className="h1 mb-4">Recent Visit Reports</h3>

      <div className="space-y-3">
        {recentVisits.map((visit) => (
          <div
            key={visit.id}
            className="p-4 border border-gray-700 rounded-lg hover:border-gray-600 bg-gray-900/30"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h4 className="font-medium text-gray-100">
                    {visit.customer}
                  </h4>

                  <span
                    className={`inline-flex px-2 py-1 rounded-full text-xs font-medium border ${
                      visit.status === "Completed"
                        ? "bg-green-500/20 text-green-400 border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                    }`}
                  >
                    {visit.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500">Agent</p>
                    <p className="font-medium text-gray-200">{visit.agent}</p>
                  </div>

                  <div>
                    <p className="text-gray-500">Time</p>
                    <p className="font-medium text-gray-200">{visit.time}</p>
                  </div>

                  <div>
                    <p className="text-gray-500">Outcome</p>
                    <p className="font-medium text-gray-200">{visit.outcome}</p>
                  </div>

                  <div>
                    <p className="text-gray-500">Amount</p>
                    <p className="font-medium text-green-400">
                      {visit.amount > 0
                        ? `₹${visit.amount.toLocaleString()}`
                        : "-"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between lg:justify-end gap-4 w-full lg:w-auto">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <MapPin
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${
                        visit.gpsVerified ? "text-green-400" : "text-red-400"
                      }`}
                    />
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                      GPS
                    </p>
                  </div>
                  <div className="text-center">
                    <Camera
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${
                        visit.photoProof ? "text-green-400" : "text-red-400"
                      }`}
                    />
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                      Photo
                    </p>
                  </div>
                </div>
                <Button variant="secondary">View Details</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentVisits;
