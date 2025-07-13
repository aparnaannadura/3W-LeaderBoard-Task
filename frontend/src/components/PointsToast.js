// src/components/PointsToast.js
import React from 'react';

const PointsToast = ({ points }) => {
  return (
    points && (
      <div className="mt-4 text-center text-2xl text-amber-300 font-semibold transition">
        🌟 You earned {points} points!
      </div>
    )
  );
};

export default PointsToast;
