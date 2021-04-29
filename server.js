const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { debugPort } = require('process');
const connectDB = require('./config/db')

// load env variables
dotenv.config({ path: './config/config.env'});

// connect database
connectDB();

const app = express();

//body parser
app.use(express.json());

// enable cors
app.use(cors());

// routes
app.use('/api/v1/stores', require('./routes/stores'))

//port
const PORT = process.env.PORT || 2121;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`));