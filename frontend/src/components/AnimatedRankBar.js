// src/components/AnimatedRankBar.js
import React from 'react';

const AnimatedRankBar = ({ users }) => {
  if (!users || users.length === 0) return null;

  const sorted = [...users].sort((a, b) => (b.points || 0) - (a.points || 0));
  const topPoints = sorted[0]?.points || 1;

  return (
    <div className="mt-8 bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20">
      <h3 className="text-xl font-bold text-center text-fuchsia-300 mb-4">📊 Rank Progress</h3>
      <div className="space-y-4">
        {sorted.map((user, index) => {
          const percent = Math.round(((user.points || 0) / topPoints) * 100);
          return (
            <div key={user._id}>
              <div className="flex justify-between text-sm mb-1 text-white/80">
                <span>#{index + 1} {user.name}</span>
                <span>{user.points || 0} pts</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-4">
                <div
                  className="h-4 rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-fuchsia-500 transition-all"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedRankBar;
