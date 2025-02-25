const express = require("express");
const {
  getAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} = require("../controllers/appointmentController");  // 🛠 Ensure correct path

const router = express.Router();

// 🔵 Get all appointments (GET)
router.get("/", getAppointments);

// 🔵 Get a specific appointment by ID (GET)
router.get("/:id", getAppointmentById);

// 🟢 Create a new appointment (POST)
router.post("/", createAppointment);

// 🟡 Update an appointment (PUT)
router.put("/:id", updateAppointment);

// 🔴 Delete an appointment (DELETE)
router.delete("/:id", deleteAppointment);

module.exports = router;
