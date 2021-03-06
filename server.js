const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const catalog = require('./routes/catalog');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json);

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Use Routes
app.use('/catalog', catalog);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server has started on port ${port}`));