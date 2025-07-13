// src/components/AddUser.js
import React, { useState } from 'react';

const AddUser = ({ onAdd }) => {
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (!name.trim()) return;
    onAdd(name);
    setName('');
  };

  return (
    <div className="flex mt-4 gap-2">
      <input
        type="text"
        className="flex-1 p-3 rounded-lg bg-white/20 text-white placeholder-white/70"
        placeholder="Enter new user"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-gradient-to-r from-indigo-400 to-fuchsia-500 rounded-xl text-white font-bold hover:scale-105 transition"
      >
        ➕ Add
      </button>
    </div>
  );
};

export default AddUser;
