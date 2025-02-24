const Appointment = require("../models/appointmentModel");

const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate("doctorId");
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching appointments" });
  }
};

const bookAppointment = async (req, res) => {
  try {
    const { doctorId, date, duration, appointmentType, patientName, notes } = req.body;

    const newAppointment = new Appointment({
      doctorId,
      date,
      duration,
      appointmentType,
      patientName,
      notes,
    });

    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ message: "Error booking appointment" });
  }
};

module.exports = { getAppointments, bookAppointment };
