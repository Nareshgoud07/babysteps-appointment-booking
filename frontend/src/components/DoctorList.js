import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/DoctorList.css'

class DoctorList extends Component {
  state = {
    doctors: [
      { id: 1, name: "Dr. Smith" },
      { id: 2, name: "Dr. Johnson" },
      { id: 1, name: "Dr. Naveen" },
      { id: 2, name: "Dr. Naresh" },
      { id: 1, name: "Dr. Vamshi" },
      { id: 2, name: "Dr. Rakesh" },
      { id: 1, name: "Dr. Arun" },
      { id: 2, name: "Dr. Kethan" },
      { id: 1, name: "Dr. Goutham" },
      { id: 2, name: "Dr. Johnson" },
    ],
  };

  render() {
    return (
      <div>
        <ul className="doctor-list">
          {this.state.doctors.map((doctor) => (
            <li key={doctor.id} className="doctor-item">
              <span>{doctor.name}</span>
              <Link to={`/book-appointment/${doctor.id}`} className="book-btn">
                Book Appointment
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DoctorList;