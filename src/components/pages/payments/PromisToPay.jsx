import Badge from "@/components/atoms/Badge";
import PaymentCard from "@/components/molecules/PaymentCard";
import React from "react";

const PromisToPay = () => {
  const reminders = [
    {
      name: "Rajesh Kumar",
      customerId: "C001",
      creator: "AI Bot",
      dueDate: "25/04/2026",
      amount: 100000,
      status: "Active",
    },
    {
      name: "Kavita Joshi",
      customerId: "C006",
      creator: "Agent Rahul",
      dueDate: "30/04/2026",
      amount: 180000,
      status: "Active",
    },
  ];
  return (
    <div>
      <div className="w-full  space-y-4">
        {reminders.map((item, index) => (
          <PaymentCard
            key={index}
            variant="action"
            data={item}
            statusComponent={
              <Badge text={item.status} customStyle="capitalize" />
            }
          />
        ))}
      </div>
    </div>
  );
};

export default PromisToPay;
