import React, { Component } from "react";
import DoctorList from "../components/DoctorList";
import '../styles/Home.css'

class HomePage extends Component {
  render() {
    return (
      <div>
        <DoctorList />
      </div>
    );
  }
}

export default HomePage;
