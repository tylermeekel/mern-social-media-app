const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000;

//Middleware for body processing
app.use(express.json());

//Fix CORS errors
app.use(cors());

//Post Routes
app.use('/api/posts', require('./routes/postRoutes'));

//User Routes
app.use('/api/users', require('./routes/userRoutes'))


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log('connected to db & listening on port', PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })