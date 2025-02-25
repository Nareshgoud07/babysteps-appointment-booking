import React, { Component } from "react";
import { bookAppointment } from "../services/api";
import "../styles/AppointmentForm.css";

class AppointmentForm extends Component {
  state = {
    patientName: "",
    appointmentType: "",
    notes: "",
    isSubmitting: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { doctorId, date, time } = this.props;
    const { patientName, appointmentType, notes } = this.state;

    if (!patientName || !appointmentType) {
      alert("Please fill all required fields.");
      return;
    }
    this.setState({ isSubmitting: true });
    this.setState({
      patientName: "",
      appointmentType: "",
      notes: "",
    });

    alert('Appointment booked Successfully')

    

    
    const response = await bookAppointment({
        doctorId,
        date,
        time,
        patientName,
        appointmentType,
        notes,
    });

      /*if (response.success) {
        alert("Appointment booked successfully!");
        this.setState({
          patientName: "",
          appointmentType: "",
          notes: "",
        });
      }
      */
      
    
  };

  render() {
    const { patientName, appointmentType, notes, isSubmitting } = this.state;

    return (
      <div className="appointment-container">
    
        <form className="appointment-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            value={patientName}
            onChange={this.handleChange}
            required
          />
          <select
            name="appointmentType"
            value={appointmentType}
            onChange={this.handleChange}
            required
          >
            <option value="">Select Appointment Type</option>
            <option value="Routine Check-Up">Routine Check-Up</option>
            <option value="Ultrasound">Ultrasound</option>
            <option value="Blood Test">Blood Test</option>
            <option value="X-Ray">X-Ray</option>
            <option value="MRI Scan">MRI Scan</option>
            <option value="Dental Check-Up">Dental Check-Up</option>
            <option value="Eye Examination">Eye Examination</option>
            <option value="General Consultation">General Consultation</option>
            <option value="Physiotherapy">Physiotherapy</option>
            <option value="Vaccination">Vaccination</option>
          </select>
          <textarea
            name="notes"
            placeholder="Additional Notes"
            value={notes}
            onChange={this.handleChange}
          ></textarea>
          <button type="submit" className="book-btn" disabled={isSubmitting}>
            {isSubmitting ? "Book Appointment" : "Book Appointment"}
          </button>
        </form>
      </div>
    );
  }
}

export default AppointmentForm;
