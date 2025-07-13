// src/components/ClaimHistory.js
import React from 'react';

const ClaimHistory = ({ history }) => {
  if (!history || history.length === 0) return null;

  return (
    <div className="mt-6 bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20 text-white">
      <h3 className="text-lg font-semibold text-indigo-300 mb-2">📜 Claim History</h3>
      <ul className="space-y-1 text-sm">
        {history.slice(0, 5).map((item, index) => (
          <li key={index} className="text-white/80">
            {item.name} claimed 🎯 <span className="text-amber-300 font-bold">{item.points}</span> points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClaimHistory;
