
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getDoctorSlots } from "../services/api";
import AppointmentForm from "./AppointmentForm";

const DoctorDetails = () => {
  const { doctorId } = useParams();
  const [slots, setSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleDateChange = async (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    try {
      const slots = await getDoctorSlots(doctorId, date);
      setSlots(slots);
    } catch (error) {
      console.error("Error fetching slots:", error);
    }
  };

  return (
    <div className="doctor-details">
      <h2>Doctor Details</h2>
      <input type="date" onChange={handleDateChange} />
      <ul>
        {slots.map((slot, index) => (
          <li key={index}>
            {slot} <button onClick={() => setSelectedSlot(slot)}>Book</button>
          </li>
        ))}
      </ul>
      {selectedSlot && <AppointmentForm doctorId={doctorId} date={selectedDate} time={selectedSlot} />}
    </div>
  );
};

export default DoctorDetails;
