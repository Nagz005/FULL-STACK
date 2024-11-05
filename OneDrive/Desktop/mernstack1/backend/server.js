const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Initialize app and middlewares
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection using hardcoded string (not recommended for production)
mongoose.connect('mongodb://localhost:27017/admindb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Import routes
const taskRoutes = require('./routes/taskRoutes');

// Use routes
app.use('/api', taskRoutes);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
