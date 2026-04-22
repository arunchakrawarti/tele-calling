"use client";
import Heading from "@/components/atoms/Heading";
import { DollarSign, Calendar, Clock, CheckCircle } from "lucide-react";
import React, { useState } from "react";
import EmergencyAlert from "./EmergencyAlert";
import PaymentMethods from "./PaymentMethods";
import Tabs from "./Tabs";
import PaymentStatus from "./PaymentStatus";

const Mainpayment = () => {
  const [activeTab, setActiveTab] = useState("payments");
  const stats = [
    {
      title: "Payments Today",
      value: "12",
      sub: "₹5.8L collected",
      icon: DollarSign,
      color: "text-green-400",
    },
    {
      title: "Active PTPs",
      value: "85",
      sub: "₹42.5L expected",
      icon: Calendar,
      color: "text-blue-400",
    },
    {
      title: "PTPs Due Today",
      value: "5",
      sub: "₹2.8L pending",
      icon: Clock,
      color: "text-orange-400",
    },
    {
      title: "PTP Fulfillment",
      value: "72%",
      sub: "This month",
      icon: CheckCircle,
      color: "text-purple-400",
    },
  ];

  return (
    <div>
      <Heading
        title="Payments & PTPs"
        paragraph="Track payments and promises to pay"
        actions={[
          {
            text: "Record Payment",
            icon: "Plus",
            variant: "primary",
            route: "",
          },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-custom-dark  border border-white/10 rounded-xl p-5"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-400">{s.title}</p>
              <s.icon className={`w-5 h-5 ${s.color}`} />
            </div>
            <p className="text-3xl text-white mb-2">{s.value}</p>
            <p className="text-sm text-gray-400">{s.sub}</p>
          </div>
        ))}
      </div>
      <EmergencyAlert />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <PaymentMethods activeTab={activeTab} />

      <PaymentStatus/>
    </div>
  );
};

export default Mainpayment;
