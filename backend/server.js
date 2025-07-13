const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// ✅ Allow only Vercel frontend
app.use(cors({
  origin: 'https://3-w-leader-board-task.vercel.app',
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));

// Root endpoint
app.get('/', (req, res) => {
  res.send('🚀 Leaderboard Backend Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server started on port ${PORT}`));
