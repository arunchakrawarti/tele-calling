// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";
// import * as LucideIcons from "lucide-react"; 

// const Heading = ({
//   title,
//   paragraph,
//   actions = [],
//   showLive = false,
// }) => {
//   const router = useRouter();

//   return (
//     <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
//       <div>
//         <h1 className="text-2xl font-semibold text-white tracking-tight">
//           {title}
//         </h1>

//         {paragraph && (
//           <p className="text-sm text-gray-400 mt-1 font-medium">
//             {paragraph}
//           </p>
//         )}
//       </div>

//       {(showLive || actions.length > 0) && (
//         <div className="flex items-center gap-3">
//           {showLive && (
//             <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-bold tracking-wider uppercase">
//               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//               Live
//             </div>
//           )}

//           {actions.map((btn, i) => {
            
//             const Icon = btn.icon ? LucideIcons[btn.icon] : null;

//             return (
//               <button
//                 key={i}
//                 onClick={() => (btn.route ? router.push(btn.route) : null)}
//                 className={`
//                   flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold
//                   transition-all duration-200 active:scale-95
//                   ${
//                     btn.variant === "primary"
//                       ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
//                       : btn.variant === "outline"
//                       ? "bg-[#161b2e] border border-gray-700 text-gray-400 hover:bg-gray-800"
//                       : "bg-gray-800 text-white"
//                   }
//                 `}
//               >
//                 {Icon && <Icon size={18} strokeWidth={2.5} />}
//                 {btn.text}
//               </button>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Heading;

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import * as LucideIcons from "lucide-react";

const Heading = ({
  title,
  paragraph,
  actions = [],
  showLive = false,
  selectOptions = [],     // ✅ new
  selectedValue = "",     // ✅ new
  onSelectChange = () => {} // ✅ new
}) => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
      
      {/* LEFT */}
      <div>
        <h1 className="text-2xl font-semibold text-white tracking-tight">
          {title}
        </h1>

        {paragraph && (
          <p className="text-sm text-gray-400 mt-1 font-medium">
            {paragraph}
          </p>
        )}
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 flex-wrap">

        {/* ✅ SELECT DROPDOWN */}
        {selectOptions.length > 0 && (
          <select
            value={selectedValue}
            onChange={(e) => onSelectChange(e.target.value)}
            className="bg-[#161b2e] border border-gray-700 text-white text-sm px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          >
            {selectOptions.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        )}

        {/* LIVE */}
        {showLive && (
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-bold tracking-wider uppercase">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Live
          </div>
        )}

        {/* ACTION BUTTONS */}
        {actions.map((btn, i) => {
          const Icon = btn.icon ? LucideIcons[btn.icon] : null;

          return (
            <button
              key={i}
              onClick={() => (btn.route ? router.push(btn.route) : null)}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold
                transition-all duration-200 active:scale-95
                ${
                  btn.variant === "primary"
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
                    : btn.variant === "outline"
                    ? "bg-[#161b2e] border border-gray-700 text-gray-300 hover:bg-gray-800"
                    : "bg-gray-800 text-white"
                }
              `}
            >
              {Icon && <Icon size={18} strokeWidth={2.5} />}
              {btn.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Heading;