"use client";
import clsx from "clsx";


// Predefined color skins
const colorMap = {
  active: "bg-green-900 text-green-300 border border-green-700",
  pending: "bg-yellow-900 text-yellow-400 border border-yellow-700",
  rejected: "bg-red-900 text-red-400 border border-red-700",
  completed: "bg-emerald-900 text-emerald-400 border border-emerald-700",
  failed: "bg-rose-900 text-rose-400 border border-rose-700",
  "tele-calling": "bg-blue-900 text-blue-400 border border-blue-700",
  field: "bg-red-900 text-red-400 border border-red-700",
};
const randomColors = [
    "bg-pink-100 text-pink-700 border border-pink-200",
    "bg-purple-100 text-purple-700 border border-purple-200",
    "bg-indigo-100 text-indigo-700 border border-indigo-200",
    "bg-teal-100 text-teal-700 border border-teal-200",
    "bg-orange-100 text-orange-700 border border-orange-200",
];


export const Badge = ({ text, customStyle }) => {
    const key = text?.toLowerCase().trim();


    const style =
        colorMap[key] ||
        randomColors[Math.floor(Math.random() * randomColors.length)];


    return (
        <span
            className={clsx(
                "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 select-none",
                style,
                customStyle,
            )}
        >
            {text}
        </span>
    );
};


export default Badge;




// Example use

//     < Badge text =”pending” customStyle =”capitalize”/>
