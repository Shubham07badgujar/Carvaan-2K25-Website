const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const authRoutes = require("./routes/auth");
const eventRoutes = require("./routes/events");

const app = express();

// Database connection (inside the 'database.js' file)
require("./database");

//view Engine
app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // ✅ Serve static assets

// ✅ Serve HTML pages
app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));
app.get("/contact", (req, res) => res.render("contact"));
app.get("/admin", (req, res) => res.render("admin-dashboard"));
app.get("/events", (req, res) => res.render("events"));
// app.get('/event-details', (req, res) => res.render('event-details'))
app.get("/registration", (req, res) => res.render("registration"));
app.get("/payment", (req, res) => res.render("payment"));
app.get("/workshop", (req, res) => res.render("workshop"));

app.get("/kalasangamEvents", (req, res) => {
  res.render("kalasangamEvents");
});

app.get('/event-details/literary', (req, res) => {
  res.render('event-details/literary');
});

app.get('/event-details/writing', (req, res) => {
  res.render('event-details/writing');
});

app.get('/event-details/music', (req, res) => {
  res.render('event-details/music');
});

app.get('/event-details/dance', (req, res) => {
  res.render('event-details/dance');
});

app.get('/event-details/theater', (req, res) => {
  res.render('event-details/theater');
});

app.get('/event-details/finearts', (req, res) => {
  res.render('event-details/finearts');
});



// ✅ Serve `header.html` correctly
// app.get("/header.html", (req, res) =>
//   res.sendFile(path.join(__dirname, "views", "header.html"))
// );

// Routes
app.use("/auth", authRoutes);
app.use("/events", eventRoutes);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
