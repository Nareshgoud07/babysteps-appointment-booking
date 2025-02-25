import React, { Component } from "react";
import { getDoctors } from "../services/api";
import { withRouter } from "../utils/withRouter";
import "../styles/DoctorList.css";

class DoctorList extends Component {
  state = {
    doctors: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const data = await getDoctors();
      this.setState({ doctors: data, loading: false });
    } catch (error) {
      console.error("Error fetching doctors:", error);
      this.setState({ loading: false });
    }
  }

  handleSelectDoctor = (id) => {
    this.props.navigate(`/book-appointment/${id}`);
  };

  render() {
    const { doctors, loading } = this.state;

    return (
      <div className="doctor-list">
        <h2 className="heading">Select a Doctor</h2>

        {loading ? (
          <div className="loader"></div>
        ) : doctors.length > 0 ? (
          <div className="doctor-grid">
            {doctors.map((doctor) => (
              <div
                key={doctor._id}
                className="doctor-card"
                onClick={() => this.handleSelectDoctor(doctor._id)}
              >
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="specialization">Specialization: {doctor.specialization}</p>
                <p className="availability">
                  Available: {doctor.workingHours?.start} - {doctor.workingHours?.end}
                </p>
                <button className="book-btn">Book Appointment</button>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-doctors">No doctors available</p>
        )}
      </div>
    );
  }
}

export default withRouter(DoctorList);
