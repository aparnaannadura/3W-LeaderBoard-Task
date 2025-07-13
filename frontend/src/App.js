// src/App.js
import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import ClaimButton from './components/ClaimButton';
import PointsToast from './components/PointsToast';
import Leaderboard from './components/Leaderboard';
import TopPerformer from './components/TopPerformer';
import ClaimHistory from './components/ClaimHistory';
import AnimatedRankBar from './components/AnimatedRankBar';
import API from './api/api';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [lastPoints, setLastPoints] = useState(null);
  const [history, setHistory] = useState([]);

  // 🔁 Fetch users from backend
  useEffect(() => {
    fetchUsers();
    fetchHistory();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await API.get('/');
      setUsers(res.data);
    } catch (err) {
      console.error('❌ Failed to fetch users:', err.message);
    }
  };

  const fetchHistory = async () => {
    try {
      const res = await API.get('/history');
      setHistory(res.data);
    } catch (err) {
      console.error('❌ Error loading history:', err.message);
    }
  };

  // ➕ Add new user (API call)
  const handleAddUser = async (name) => {
    try {
      const res = await API.post('/add', { name });
      setUsers([...users, res.data]);
    } catch (err) {
      console.error('❌ Failed to add user:', err.message);
    }
  };

  // 🎯 Claim points (API call)
  const handleClaim = async () => {
    try {
      const res = await API.post('/claim', { userId: selectedUser });
      setLastPoints(res.data.points);

      const updated = users.map((u) =>
        u._id === selectedUser ? res.data.user : u
      );
      setUsers(updated);
      fetchHistory();
    } catch (err) {
      console.error('❌ Failed to claim points:', err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-700 via-purple-900 to-red-950 text-white p-6">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 transition-all">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-fuchsia-300 drop-shadow">
          ⚔️ Royal Leaderboard Arena
        </h1>

        <TopPerformer users={users} />

        <UserList users={users} selectedUser={selectedUser} onSelect={setSelectedUser} />
        <AddUser onAdd={handleAddUser} />
        <ClaimButton onClaim={handleClaim} disabled={!selectedUser} />
        <PointsToast points={lastPoints} />
        <Leaderboard users={users} />
        <AnimatedRankBar users={users} />
        <ClaimHistory history={history} />
      </div>
    </div>
  );
};

export default App;
