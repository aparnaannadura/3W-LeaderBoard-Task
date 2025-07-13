// src/components/UserCard.js
import React from 'react';

const UserCard = ({ users, selectedUser, onSelect }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
      {users.map((user) => (
        <div
          key={user._id}
          onClick={() => onSelect(user._id)}
          className={`cursor-pointer p-4 rounded-xl text-white text-center font-semibold shadow-md 
            transition-all border 
            ${selectedUser === user._id
              ? 'bg-gradient-to-r from-fuchsia-500 to-purple-700 border-fuchsia-300 scale-105'
              : 'bg-white/10 backdrop-blur-md border-white/20 hover:scale-105 hover:border-fuchsia-400'}`}
        >
          👤 {user.name}
        </div>
      ))}
    </div>
  );
};

export default UserCard;
