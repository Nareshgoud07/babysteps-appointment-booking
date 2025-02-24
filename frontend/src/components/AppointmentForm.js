import React, { Component } from "react";

class AppointmentForm extends Component {
  state = {
    patientName: "",
    appointmentType: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked with Doctor ID: ${this.props.doctorId}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mt-3">
        <div className="form-group">
          <label>Patient Name:</label>
          <input
            type="text"
            className="form-control"
            name="patientName"
            value={this.state.patientName}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group mt-2">
          <label>Appointment Type:</label>
          <select
            className="form-control"
            name="appointmentType"
            value={this.state.appointmentType}
            onChange={this.handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="Routine Check-Up">Routine Check-Up</option>
            <option value="Ultrasound">Ultrasound</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success mt-3">
          Book Appointment
        </button>
      </form>
    );
  }
}

export default AppointmentForm;
