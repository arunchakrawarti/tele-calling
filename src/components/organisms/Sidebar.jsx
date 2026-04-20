"use client";
import { SideBarData } from "../../config/SideBarData";
import NavigationLink from "./NavigationLink";

const SideBar = ({ isMobile = false, isOpen = true, onClose }) => {
  return (
    <>
      {isMobile && isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          w-[80px] bg-[#0f1419] border border-gray-800
          flex flex-col items-center
          py-4
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="mb-4">
          <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center">
            <i className="ri-phone-line text-white text-2xl"></i>
          </div>
        </div>
        <ul className="flex-1 flex flex-col items-center gap-4 overflow-y-auto no-scrollbar">
          {SideBarData.map((section, index) =>
            section.items.map((item, i) => (
              <NavigationLink key={i} {...item} />
            ))
          )}
        </ul>
        <div className="mt-auto mb-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl hover:bg-white/10 cursor-pointer">
            <i className="ri-logout-box-r-line text-gray-300 text-2xl"></i>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;