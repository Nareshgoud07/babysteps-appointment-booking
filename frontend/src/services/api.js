const BASE_URL = "http://localhost:5000"; // Change this if backend is hosted

export const fetchDoctors = async () => {
  try {
    const response = await fetch(`${BASE_URL}/doctors`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching doctors:", error);
  }
};

export const fetchAvailableSlots = async (doctorId, date) => {
  try {
    const response = await fetch(`${BASE_URL}/doctors/${doctorId}/slots?date=${date}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching slots:", error);
  }
};

export const bookAppointment = async (appointmentData) => {
  try {
    const response = await fetch(`${BASE_URL}/appointments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointmentData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error booking appointment:", error);
  }
};
