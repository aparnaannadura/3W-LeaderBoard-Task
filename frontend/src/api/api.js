import axios from 'axios';

const API = axios.create({
  baseURL: 'https://threew-leaderboard-task-1.onrender.com/api/users',
});

export default API;
