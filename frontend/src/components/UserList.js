// src/components/UserList.js
import React from 'react';

const UserList = ({ users, selectedUser, onSelect }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-lg font-semibold text-purple-300">Select User</label>
      <select
        className="w-full p-3 rounded-lg bg-white/80 text-black font-semibold focus:outline-none backdrop-blur-sm shadow-md"
        value={selectedUser}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">-- Choose a user --</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserList;
