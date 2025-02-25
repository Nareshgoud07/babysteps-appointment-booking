import React, { Component } from "react";
import { getAppointments, cancelAppointment } from "../services/api";

class AppointmentList extends Component {
  state = {
    appointments: [],
  };

  async componentDidMount() {
    try {
      const appointments = await getAppointments();
      this.setState({ appointments });
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  }

  handleCancel = async (id) => {
    try {
      await cancelAppointment(id);
      this.setState({ appointments: this.state.appointments.filter((appt) => appt._id !== id) });
    } catch (error) {
      console.error("Error canceling appointment:", error);
    }
  };

  render() {
    return (
      <div className="appointment-list">
        <h2>My Appointments</h2>
        <ul>
          {this.state.appointments.map((appt) => (
            <li key={appt._id}>
              {appt.date} at {appt.time} with {appt.doctorName}
              <button onClick={() => this.handleCancel(appt._id)}>Cancel</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AppointmentList;
