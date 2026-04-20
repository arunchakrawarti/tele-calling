"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationLink = ({ icon, link }) => {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <li>
      <Link
        href={link || "#"}
        className={`
          w-14 h-14 flex items-center justify-center
          rounded-xl transition-all duration-200
          ${
            isActive
              ? "bg-blue-600 text-white shadow-lg"
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