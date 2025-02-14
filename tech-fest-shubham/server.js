const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');

const app = express();

// Database connection (inside the 'database.js' file)
require('./database');

//view Engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // ✅ Serve static assets

// ✅ Serve HTML pages
app.get('/', (req, res) => res.render('index'))
app.get('/about', (req, res) => res.render('about'))
app.get('/contact', (req, res) => res.render('contact'))
app.get('/admin', (req, res) => res.render('admin-dashboard'))
app.get('/events', (req, res) => res.render('events'))
app.get('/event-details', (req, res) => res.render('event-details'))
app.get('/registration', (req, res) => res.render('registration'))
app.get('/payment', (req, res) => res.render('payment'))
app.get('/workshop', (req, res) => res.render('workshop'))


// ✅ Dummy Data for Committees
const committees = [
    { name: "AI Club", coordinator: "Alice", coCoordinators: ["Bob", "Charlie"] },
    { name: "Cyber Security", coordinator: "David", coCoordinators: ["Eve", "Frank"] },
    { name: "Robotics Club", coordinator: "Grace", coCoordinators: ["Hank", "Ivy"] },
    { name: "Coding Club", coordinator: "Jack", coCoordinators: ["Kate", "Leo"] },
    { name: "IoT Club", coordinator: "Mia", coCoordinators: ["Nick", "Olivia"] },
    { name: "Cloud Computing", coordinator: "Peter", coCoordinators: ["Quinn", "Ryan"] },
    { name: "Game Development", coordinator: "Sophia", coCoordinators: ["Tom", "Uma"] },
    { name: "AI Research", coordinator: "Victor", coCoordinators: ["Walter", "Xander"] },
    { name: "Data Science", coordinator: "Yara", coCoordinators: ["Zane", "Anna"] },
    { name: "Web Development", coordinator: "Ben", coCoordinators: ["Catherine", "Daniel"] }
];

// ✅ Route for Admin Dashboard
app.get('/admin', (req, res) => {
    res.render('admin-dashboard', { committees }); // ✅ Send committees directly
});


// ✅ Serve `header.html` correctly
app.get('/header.html', (req, res) => res.sendFile(path.join(__dirname, 'views', 'header.html')));

// Routes
app.use('/auth', authRoutes);
app.use('/events', eventRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
