"use client";
import React from "react";
import StatsSection from "./StatsSection";
import LiveAgents from "./LiveAgents";
import CallQueue from "./CallQueue";
import Performance from "./Performance";
import AlertBox from "./AlertBox";
import Heading from "@/components/atoms/Heading";

const TeleCallingMonitor = () => {
  return (
    <div className="space-y-6">

      <Heading
        title="Tele-calling Monitor"
        paragraph="Real-time monitoring"
      />

      <StatsSection />
      <LiveAgents />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CallQueue />
        <Performance />
      </div>

      <AlertBox />

    </div>
  );
};

export default TeleCallingMonitor;