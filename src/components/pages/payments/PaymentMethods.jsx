"use client";
import React from "react";
import { DollarSign, Calendar, AlertCircle, Clock } from "lucide-react";
import Button from "@/components/common/Button";

const PaymentMethods = ({ activeTab }) => {
  const mockPTPs = [
    {
      id: "PTP001",
      customerId: "C001",
      customerName: "Rajesh Kumar",
      promisedAmount: 100000,
      promisedDate: "2026-04-25",
      status: "Active",
      createdBy: "AI Bot",
    },
    {
      id: "PTP002",
      customerId: "C006",
      customerName: "Kavita Joshi",
      promisedAmount: 180000,
      promisedDate: "2026-04-30",
      status: "Active",
      createdBy: "Agent Rahul",
    },
  ];

  const mockPayments = [
    {
      id: "P001",
      customerId: "C001",
      customerName: "Rajesh Kumar",
      amount: 25000,
      date: "2026-04-17 10:30",
      method: "UPI",
      status: "Completed",
    },
    {
      id: "P002",
      customerId: "C004",
      customerName: "Sneha Reddy",
      amount: 50000,
      date: "2026-04-17 09:15",
      method: "NEFT",
      status: "Completed",
    },
    {
      id: "P003",
      customerId: "C003",
      customerName: "Amit Patel",
      amount: 15000,
      date: "2026-04-16 16:45",
      method: "Cash",
      status: "Completed",
    },
  ];

  return (
    <div className=" mt-5">
      <div className="space-y-3">
        {activeTab === "payments"
          ? mockPayments.map((payment) => (
              <div
                key={payment.id}
                className="p-3 sm:p-4 border border-white/10 rounded-xl hover:border-white/20 bg-[#0f1419] transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                    </div>

                    <div>
                      <h4 className="text-white text-sm sm:text-base">
                        {payment.customerName}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Customer ID: {payment.customerId}
                      </p>

                      <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 text-xs sm:text-sm text-gray-400">
                        <span>{payment.date}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{payment.method}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-left sm:text-right mt-2 sm:mt-0">
                    <p className="text-lg sm:text-2xl text-green-400">
                      ₹{payment.amount.toLocaleString()}
                    </p>
                    <span className="inline-flex px-2 sm:px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400 border border-green-500/30 mt-2">
                      {payment.status}
                    </span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-white/5 rounded-lg">
                  <p className="text-xs sm:text-sm text-white mb-2">
                    ✓ Emergency Actions Triggered:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-[11px] sm:text-xs text-gray-400">
                    <span>✓ AI calls stopped</span>
                    <span>✓ Agent notified</span>
                    <span>✓ Field visit cancelled</span>
                    <span>✓ Status updated</span>
                  </div>
                </div>
              </div>
            ))
          : mockPTPs.map((ptp) => {
              const daysUntilDue = Math.ceil(
                (new Date(ptp.promisedDate).getTime() - new Date().getTime()) /
                  (1000 * 60 * 60 * 24),
              );

              const isOverdue = daysUntilDue < 0;
              const isDueToday = daysUntilDue === 0;

              return (
                <div
                  key={ptp.id}
                  className={`p-3 sm:p-4 border-2 rounded-xl ${
                    isOverdue
                      ? "border-red-500/30 bg-red-500/10"
                      : isDueToday
                        ? "border-orange-500/30 bg-orange-500/10"
                        : "border-white/10 bg-[#0f1419]"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isOverdue
                            ? "bg-red-500/20"
                            : isDueToday
                              ? "bg-orange-500/20"
                              : "bg-blue-500/20"
                        }`}
                      >
                        {isOverdue ? (
                          <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                        ) : (
                          <Calendar
                            className={`w-5 h-5 sm:w-6 sm:h-6 ${
                              isDueToday ? "text-orange-400" : "text-blue-400"
                            }`}
                          />
                        )}
                      </div>

                      <div>
                        <h4 className="text-white text-sm sm:text-base">
                          {ptp.customerName}
                        </h4>

                        <p className="text-xs sm:text-sm text-gray-400">
                          Customer ID: {ptp.customerId}
                        </p>

                        <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 text-xs sm:text-sm text-gray-400">
                          <span>Created: {ptp.createdBy}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>
                            Due:{" "}
                            {new Date(ptp.promisedDate).toLocaleDateString()}
                          </span>
                        </div>

                        {isOverdue && (
                          <div className="mt-2 flex items-center gap-2 text-xs sm:text-sm text-red-400">
                            <AlertCircle className="w-4 h-4" />
                            Overdue by {Math.abs(daysUntilDue)} days
                          </div>
                        )}

                        {isDueToday && (
                          <div className="mt-2 flex items-center gap-2 text-xs sm:text-sm text-orange-400">
                            <Clock className="w-4 h-4" />
                            Due today - Follow up required
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="text-left sm:text-right">
                      <p className="text-lg sm:text-2xl text-blue-400">
                        ₹{ptp.promisedAmount.toLocaleString()}
                      </p>

                      <span
                        className={`inline-flex px-2 sm:px-3 py-1 rounded-full text-xs mt-2 ${
                          isOverdue
                            ? "bg-red-500/20 text-red-400 border border-red-500/30"
                            : isDueToday
                              ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                              : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        }`}
                      >
                        {ptp.status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <Button variant="tertiary" >
                      Mark as Paid
                    </Button>
                    <Button variant="secondary" >
                      Follow-up
                    </Button>
                    <Button variant="default">
                      Extend Date
                    </Button>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default PaymentMethods;
