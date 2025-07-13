// backend/controllers/userController.js
const User = require('../models/User');
const ClaimHistory = require('../models/ClaimHistory');

// 🟢 Get All Users
const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ points: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// 🟢 Add New User
const addUser = async (req, res) => {
  const { name } = req.body;
  try {
    const newUser = await User.create({ name });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: 'User creation failed' });
  }
};

// 🟢 Claim Random Points
const claimPoints = async (req, res) => {
  const { userId } = req.body;
  const points = Math.floor(Math.random() * 10) + 1;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.points += points;
    await user.save();

    await ClaimHistory.create({
      user: userId,
      pointsClaimed: points,
    });

    res.json({ message: 'Points claimed', points, user });
  } catch (err) {
    res.status(500).json({ error: 'Error claiming points' });
  }
};

// 🟢 Get History
const getHistory = async (req, res) => {
  try {
    const history = await ClaimHistory.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .populate('user', 'name');
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch history' });
  }
};

module.exports = {
  getUsers,
  addUser,
  claimPoints,
  getHistory,
};
