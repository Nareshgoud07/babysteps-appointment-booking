const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  date: { type: Date, required: true },
  duration: { type: Number, required: true }, // Duration in minutes
  appointmentType: { type: String, required: true }, // e.g., Consultation, Checkup
  patientName: { type: String, required: true },
  notes: { type: String },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
