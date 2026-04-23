"use client";
import Heading from "@/components/atoms/Heading";
import { DollarSign, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import React, { useState } from "react";
import EmergencyAlert from "./EmergencyAlert";
import Tabs from "./Tabs";
import PaymentStatus from "./PaymentStatus";
import StatsCard from "@/components/molecules/StatsCard";

const Mainpayment = () => {
  const [activeTab, setActiveTab] = useState("payments");
 const paymentStats = [
    {
      title: "Payments Today",
      value: "12",
      subText: "₹5.8L collected", // Green subtext
      Icon: DollarSign,
      color: "green"
    },
    {
      title: "Active PTPs",
      value: "85",
      subText: "₹42.5L expected",
      Icon: Calendar,
      color: "blue"
    },
    {
      title: "PTPs Due Today",
      value: "5",
      subText: "₹2.8L pending", // Orange/Yellow subtext
      Icon: Clock,
      color: "orange"
    },
    {
      title: "PTP Fulfillment",
      value: "72%",
      subText: "This month",
      Icon: CheckCircle2,
      color: "purple"
    }
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {paymentStats.map((stat, index) => (
          <StatsCard 
            key={index}
            {...stat} 
          />
        ))}
      </div>
      <EmergencyAlert />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />


      <PaymentStatus/>
    </div>
  );
};

export default Mainpayment;
