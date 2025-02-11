const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');

const app = express();

// Database connection (inside the 'database.js' file)
require('./database');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // ✅ Serve static assets

// ✅ Serve HTML pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'views', 'about.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'views', 'contact.html')));
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'views', 'admin-dashboard.html')));
app.get('/events', (req, res) => res.sendFile(path.join(__dirname, 'views', 'events.html')));
app.get('/event-details', (req, res) => res.sendFile(path.join(__dirname, 'views', 'event-details.html')));
app.get('/registration', (req, res) => res.sendFile(path.join(__dirname, 'views', 'registration.html')));
app.get('/payment', (req, res) => res.sendFile(path.join(__dirname, 'views', 'payment.html')));
app.get('/workshop', (req, res) => res.sendFile(path.join(__dirname, 'views', 'workshop.html')));

// ✅ Serve `header.html` correctly
app.get('/header.html', (req, res) => res.sendFile(path.join(__dirname, 'views', 'header.html')));

// Routes
app.use('/auth', authRoutes);
app.use('/events', eventRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
