const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.mongoURI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.log("❌ DB Connection Failed: ", err));
