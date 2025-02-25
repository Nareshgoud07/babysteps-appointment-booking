// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookAppointment from "./pages/BookAppointment";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center main-head">BabySteps Appointment Booking</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-appointment/:doctorId" element={<BookAppointment />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
