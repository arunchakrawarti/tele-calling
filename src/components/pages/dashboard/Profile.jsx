import React from 'react';

const Profile = () => {
  return (
    <div className="bg-custom-dark rounded h-full flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <h3 className="h1">Agent Profile</h3>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-[15px] text-green-500 ">ONLINE</span>
        </div>
      </div>

      <div className="flex flex-col items-center my-8">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00d2ff] to-[#3a7bd5] flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-blue-500/20">
          MJ
        </div>
        <h2 className="text-white text-xl font-semibold mt-4">Mark Johnson</h2>
        <p className="text-gray-400 text-sm">Agent ID: 5001 (SIP/5001)</p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between border-b border-gray-800/50 pb-3">
          <span className="text-gray-400 text-sm">Status</span>
          <span className="text-green-500 text-sm font-medium">Available</span>
        </div>
        <div className="flex justify-between border-b border-gray-800/50 pb-3">
          <span className="text-gray-400 text-sm">Queue</span>
          <span className="text-white text-sm">Outbound Sales</span>
        </div>
        <div className="flex justify-between pb-1">
          <span className="text-gray-400 text-sm">Extension</span>
          <span className="text-white text-sm font-semibold">5001</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;