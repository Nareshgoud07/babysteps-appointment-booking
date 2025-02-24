import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookAppointment from "./pages/BookAppointment";
import "bootstrap/dist/css/bootstrap.min.css"; 
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container mt-4">
          <h1 className="text-center main-head">BabySteps Appointment Booking</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book-appointment/:doctorId" element={<BookAppointment />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
