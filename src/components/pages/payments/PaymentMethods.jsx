import Badge from "@/components/atoms/Badge";
import PaymentCard from "@/components/molecules/PaymentCard";
import React from "react";

const PaymentMethods = () => {
  const transactions = [
    {
      name: "Rajesh Kumar",
      customerId: "C001",
      date: "2026-04-17",
      time: "10:30",
      method: "UPI",
      amount: 25000,
      status: "Completed",
    },
    {
      name: "Sneha Reddy",
      customerId: "C004",
      date: "2026-04-17",
      time: "09:15",
      method: "NEFT",
      amount: 50000,
      status: "Completed",
    },
    {
      name: "Amit Patel",
      customerId: "C003",
      date: "2026-04-16",
      time: "16:45",
      method: "Cash",
      amount: 15000,
      status: "Completed",
    },
  ];
  return (
    <div>
      <div className="w-full">
        {transactions.map((item, index) => (
          <PaymentCard
            key={index}
            variant="emergency"
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

export default PaymentMethods;
