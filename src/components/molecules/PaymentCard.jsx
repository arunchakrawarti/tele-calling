// import React from "react";
// import { CircleDollarSign, CalendarDays } from "lucide-react"; 
// import Button from "../common/Button";

// const PaymentCard = ({ data, variant = "emergency" }) => {
//   const isEmergency = variant === "emergency";

//   return (
//     <div className="w-full bg-[#0b141a] text-white p-5 rounded-2xl border border-gray-800 shadow-xl mb-4 font-sans">
//       <div className="flex justify-between items-start mb-6">
//         <div className="flex items-center gap-4 text-left">
//           <div
//             className={`${
//               isEmergency ? "bg-[#0f2d1f]" : "bg-[#1a2d44]"
//             } p-3 rounded-full flex items-center justify-center w-12 h-12`}
//           >
//             {isEmergency ? (
              
//               <CircleDollarSign className="text-[#22c55e] w-6 h-6" />
//             ) : (
              
//               <CalendarDays className="text-[#3b82f6] w-6 h-6" />
//             )}
//           </div>

//           <div>
//             <h3 className="text-responsive">{data.name}</h3>
//             <p className="text-gray-400 text-md">
//               Customer ID: {data.customerId}
//             </p>
//             <p className="text-gray-400 text-sm mt-2">
//               {isEmergency
//                 ? `${data.date} ${data.time}  •  ${data.method}`
//                 : `Created: ${data.creator}  •  Due: ${data.dueDate}`}
//             </p>
//           </div>
//         </div>

//         <div className="text-right">
//           <h2
//             className={`${
//               isEmergency ? "text-[#22c55e]" : "text-[#3b82f6]"
//             } text-2xl font-bold`}
//           >
//             ₹{data.amount.toLocaleString()}
//           </h2>
//           <span
//             className={`inline-block mt-2 text-[10px] px-3 py-0.5 rounded-full uppercase font-bold border ${
//               isEmergency
//                 ? "bg-[#0f2d1f] text-[#22c55e] border-[#22c55e]/30"
//                 : "bg-[#1a2d44] text-[#3b82f6] border-[#3b82f6]/30"
//             }`}
//           >
//             {data.status}
//           </span>
//         </div>
//       </div>

//       {isEmergency ? (
//         <div className=" p-4 rounded-xl pt-4 bg-white/5">
//           <p className="text-[13px] font-semibold mb-1 flex items-center gap-1">
//             <span className="text-responsive">✓</span> 
//             Emergency Actions Triggered:
//           </p>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[11px] text-gray-400">
//             {[
//               "AI calls stopped",
//               "Agent notified",
//               "Field visit cancelled",
//               "Status updated",
//             ].map((action) => (
//               <div key={action} className="flex text-[13px] items-center gap-1">
//                 <span className="text-gray-400">✓</span> {action}
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div className="grid grid-cols-3 gap-3 pt-2">
//           <Button variant="tertiary"> Mark as Paid </Button>
//           <Button variant="secondary"> Follow-up </Button>
//           <Button variant="default">Extend Date</Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentCard;


"use client";
import React from "react";
import { CircleDollarSign, CalendarDays } from "lucide-react";
import Button from "../common/Button";

const PaymentCard = ({ data, variant = "action", statusComponent }) => {
  const isEmergency = variant === "emergency";

  return (
    <div className="w-full bg-[#0b141a] text-white p-5 rounded-2xl border border-gray-800 shadow-xl mb-4">

      {/* ================= Top Section ================= */}
      <div className="flex justify-between items-start mb-6">

        {/* Left Side */}
        <div className="flex items-center gap-4 text-left">
          
          {/* Icon */}
          <div
            className={`${
              isEmergency ? "bg-[#0f2d1f]" : "bg-[#1a2d44]"
            } p-3 rounded-full w-12 h-12 flex items-center justify-center`}
          >
            {isEmergency ? (
              <CircleDollarSign className="text-green-500 w-6 h-6" />
            ) : (
              <CalendarDays className="text-blue-500 w-6 h-6" />
            )}
          </div>

          {/* Info */}
          <div>
            <h3 className="text-lg font-semibold">{data.name}</h3>

            <p className="text-gray-400 text-sm">
              Customer ID: {data.customerId}
            </p>

            <p className="text-gray-400 text-xs mt-1">
              {isEmergency
                ? `${data.date} ${data.time} • ${data.method}`
                : `Created: ${data.creator} • Due: ${data.dueDate}`}
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="text-right">
          <h2
            className={`text-2xl font-bold ${
              isEmergency ? "text-green-500" : "text-blue-500"
            }`}
          >
            ₹{data.amount.toLocaleString()}
          </h2>

          {/* ✅ Custom Status Component (Badge ya kuch bhi) */}
          <div className="mt-2">
            {statusComponent}
          </div>
        </div>

      </div>

      {/* ================= Bottom Section ================= */}
      {isEmergency ? (
        <div className="p-4 rounded-xl bg-white/5">
          <p className="text-sm font-semibold mb-2">
            ✓ Emergency Actions Triggered:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-gray-400">
            {[
              "AI calls stopped",
              "Agent notified",
              "Field visit cancelled",
              "Status updated",
            ].map((action) => (
              <div key={action} className="flex items-center gap-1">
                ✓ {action}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3">
          <Button variant="tertiary">Mark as Paid</Button>
          <Button variant="secondary">Follow-up</Button>
          <Button variant="default">Extend Date</Button>
        </div>
      )}
    </div>
  );
};

export default PaymentCard;