import React, { Component } from "react";
import DoctorList from "../components/DoctorList";
import '../styles/Home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <h2 className="available-doctors">Available Doctors</h2>
        <DoctorList />
      </div>
    );
  }
}

export default Home;
