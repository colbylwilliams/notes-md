import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import notesRoutes from './routes/notes';
import { errorHandler } from './middleware/errorHandler';

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/notes', notesRoutes);

// Base route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Notes MD API',
    version: '1.0.0',
    endpoints: {
      notes: '/api/notes'
    }
  });
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});