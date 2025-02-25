import React, { Component } from "react";
import DoctorForm from "../components/DoctorForm";

class RegisterDoctor extends Component {
  handleDoctorSubmit = (doctorData) => {
    console.log("Doctor registered:", doctorData);
    // Here, you can add logic to send data to the backend (e.g., an API call)
  };

  render() {
    return (
      <div>
        <DoctorForm onSubmit={this.handleDoctorSubmit} />
      </div>
    );
  }
}

export default RegisterDoctor;
