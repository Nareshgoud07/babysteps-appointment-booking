const express = require("express");
const {
  getDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} = require("../controllers/doctorController");

const router = express.Router();

// 🟢 GET all doctors
router.get("/", getDoctors);

// 🔵 GET doctor by ID
router.get("/:id", getDoctorById);

// 🟡 POST (Create a new doctor)
router.post("/", createDoctor);

// 🟠 PUT (Update doctor details)
router.put("/:id", updateDoctor);

// 🔴 DELETE (Remove a doctor)
router.delete("/:id", deleteDoctor);

module.exports = router;
