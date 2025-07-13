// src/components/Leaderboard.js
import React from 'react';

const Leaderboard = ({ users }) => {
  const sorted = [...users].sort((a, b) => b.points - a.points);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-center text-fuchsia-300 mb-4">🏆 Leaderboard</h2>
      <div className="bg-white/10 rounded-lg p-4 backdrop-blur-md">
        <table className="w-full text-left text-white">
          <thead>
            <tr className="text-purple-200">
              <th>#</th>
              <th>User</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((user, index) => (
              <tr key={user._id} className="hover:bg-white/10 transition">
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
