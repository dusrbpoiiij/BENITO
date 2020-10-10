const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();

// config .env to ./config/config/env 
require('dotenv').config({
  path: './config/config.env'
}) 

// Connect DB 
connectDB();

// Config Body Parser 
app.use(bodyParser.json());

// Config for only development
if(process.env.NODE_ENV === 'development') {
  app.use(cors({
    origin: process.env.CLIENT_URL
  }));

  app.use(morgan('dev'));
};

const authRouter = require('./routes/auth.route');
// auth route 
app.use('/api/user', authRouter);


// Page not found 
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Page Not found'
  })
});


// Litening port
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}`)
})