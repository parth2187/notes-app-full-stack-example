require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/configs/database');

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['http://localhost:4200'];

  // Enable CORS for all in development, if production, it should include production link, let CORS allow this.

app.use(cors({
  origin: function(origin, callback) {

    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    
    if (origin.includes('localhost') || origin.includes('127.0.0.1')) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'), false);
  }
}));

app.use(express.json());

const notesRoutes = require('./src/routes/notes.routes');

app.use('/notes',notesRoutes);

connectDB().then(() => {
  console.log("Database Connection is established!");
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})
.catch((err) => {
    console.error('Database cannot be connected!', err.message);
})
