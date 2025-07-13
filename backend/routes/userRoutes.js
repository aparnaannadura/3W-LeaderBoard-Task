// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const {
  getUsers,
  addUser,
  claimPoints,
  getHistory,
} = require('../controllers/userController');

// Routes
router.get('/', getUsers);
router.post('/add', addUser);
router.post('/claim', claimPoints);
router.get('/history', getHistory);

module.exports = router;
