"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationLink = ({ icon, link }) => {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <li className="relative flex items-center justify-center w-full">
      {isActive && (
        <div className="absolute left-0 w-1 h-9 bg-blue-400 rounded-r-full shadow-[0_0_15px_rgba(96,165,250,0.6)]" />
      )}

      <Link
        href={link || "#"}
        className={`
          w-12 h-12 flex items-center justify-center
          rounded-xl transition-all duration-200
          ${
            isActive
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
              : "text-gray-400 hover:bg-white/10 hover:text-white"
          }
        `}
      >
        <i className={`${icon} text-2xl`}></i>
      </Link>
    </li>
  );
};

export default NavigationLink;