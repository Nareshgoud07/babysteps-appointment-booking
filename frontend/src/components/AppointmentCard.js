import React, { Component } from "react";

class AppointmentList extends Component {
  state = {
    appointments: [
      { id: 1, patient: "Alice", type: "Routine Check-Up" },
      { id: 2, patient: "Bob", type: "Ultrasound" },
    ],
  };

  render() {
    return (
      <div>
        <h3>Upcoming Appointments</h3>
        <ul className="list-group">
          {this.state.appointments.map((appointment) => (
            <li key={appointment.id} className="list-group-item">
              {appointment.patient} - {appointment.type}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AppointmentList;
