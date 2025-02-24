import React, { Component } from "react";
import AppointmentForm from "../components/AppointmentForm";

class BookAppointment extends Component {
  render() {
    const doctorId = window.location.pathname.split("/").pop(); // Get doctorId from URL

    return (
      <div>
        <h2>Book an Appointment</h2>
        <AppointmentForm doctorId={doctorId} />
      </div>
    );
  }
}

export default BookAppointment;
