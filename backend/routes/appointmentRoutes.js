const express = require("express");
const { getAppointments, bookAppointment } = require("../controllers/appointmentController");
const router = express.Router();

router.get("/", getAppointments);
router.post("/", bookAppointment);

module.exports = router;
