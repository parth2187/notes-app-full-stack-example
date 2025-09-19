require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/configs/database');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
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
