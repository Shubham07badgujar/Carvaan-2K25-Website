import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./pages/Navbar.jsx";
import Navbar from './pages/Navbar.jsx';
import Footer from "./pages/Footer.jsx";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Registration from "./pages/Registration";
import Payment from "./pages/Payment";


import './styles/CSS/Style.css';
import './styles/CSS/bootstrap-theme.css';
import './styles/CSS/bootstrap.css';
import './styles/CSS/dosis-font.css';
import './styles/CSS/themify-icons.css';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
