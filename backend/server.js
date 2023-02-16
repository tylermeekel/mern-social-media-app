const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000;

//Middleware for body processing
app.use(express.json());

//Post Routes
app.use('/api/posts', require('./routes/postRoutes'));


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