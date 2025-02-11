const mongoose = require('mongoose');

// Use the correct connection string
mongoose.connect('mongodb://127.0.0.1:27017/yourdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('DB Connection Failed:', err);
  });
