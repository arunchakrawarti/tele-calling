"use client";

import Button from "./Button";

const LogoutModal = ({ onCancel, onConfirm }) => {
  return (
    <div className="relative mx-auto w-[90%] max-w-md rounded-2xl bg-white p-6 shadow-xl md:p-8">

      {/* ✅ Close button (correct place) */}
      <button
        onClick={onCancel}
        className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
      >
        <i className="ri-close-line"></i>
      </button>

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
        <i className="ri-logout-box-line text-xl text-gray-600"></i>
      </div>

      <h2 className="text-lg font-semibold text-gray-800">
        Logout Confirmation
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Are you sure you want to logout?
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <button
          onClick={onCancel}
          className="w-full rounded-lg border border-gray-300 bg-white py-2 text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          onClick={onConfirm}
          className="w-full rounded-lg bg-black py-2 text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;