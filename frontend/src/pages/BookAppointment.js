import React, { Component } from "react";
import AppointmentForm from "../components/AppointmentForm";
import '../styles/BookAppointment.css'

class BookAppointment extends Component {
  render() {
    const doctorId = window.location.pathname.split("/").pop();
    return (
      <div className="appointment-container">
        <h2 className="appointment-heading">Book an Appointment</h2>
        <AppointmentForm doctorId={doctorId} />
      </div>
    );
  }
}

export default BookAppointment;
