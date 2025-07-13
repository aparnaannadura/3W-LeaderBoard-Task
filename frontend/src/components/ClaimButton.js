// src/components/ClaimButton.js
import React from 'react';

const ClaimButton = ({ onClaim, disabled }) => {
  return (
    <div className="text-center mt-6">
      <button
        onClick={onClaim}
        disabled={disabled}
        className={`px-6 py-3 rounded-xl text-lg font-bold text-white shadow-md transition-all
          ${disabled
            ? 'bg-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-indigo-400 to-fuchsia-500 hover:scale-105'}`}
      >
        🎯 Claim Points
      </button>
    </div>
  );
};

export default ClaimButton;
