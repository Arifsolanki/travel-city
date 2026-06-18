require('dotenv').config();
require('./src/models/db');
<<<<<<< HEAD
=======
const userRoutes = require('./src/routes/User');
const reviewRoutes = require('./src/routes/Review');
>>>>>>> 8f4fa7f (Implemented Review POST API)

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const notFound = require('./src/middlewares/notFound');

const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/check', (req, res) => {
  res.json({
    success: true,
    message: 'Travel City Explorer API is running',
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

// TODO: EVERYONE CREATE YOUR ROUTES FROM HERE

<<<<<<< HEAD

=======
app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);
>>>>>>> 8f4fa7f (Implemented Review POST API)

app.use(notFound);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
