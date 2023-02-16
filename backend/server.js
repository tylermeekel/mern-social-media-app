const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;

//Post Routes
app.use('/api/posts', require('./routes/postRoutes'));

app.listen(PORT, () => {
    console.log('App listening on port:', PORT)
});