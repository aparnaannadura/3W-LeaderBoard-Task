// src/components/TopPerformer.js
import React from 'react';

const TopPerformer = ({ users }) => {
  if (!users || users.length === 0) return null;

  // sort by points descending and take first
  const topUser = [...users].sort((a, b) => (b.points || 0) - (a.points || 0))[0];

  return (
    <div className="mt-6 mb-8 p-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-fuchsia-500 shadow-xl text-white text-center animate-pulse">
      👑 <span className="text-amber-300 font-bold">{topUser.name}</span> is leading with 
      <span className="mx-1 text-white font-bold">{topUser.points || 0}</span> points!
    </div>
  );
};

export default TopPerformer;
