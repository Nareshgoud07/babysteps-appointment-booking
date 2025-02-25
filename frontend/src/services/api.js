
const API_URL = "http://localhost:5000/";

export const getDoctors = async () => {
  const res = await fetch(`${API_URL}doctors`);
  const data = await res.json();
  return data;
};


export const getDoctorSlots = async (doctorId, date) => {
  const res = await fetch(`${API_URL}/doctors/${doctorId}/slots?date=${date}`);
  const data = await res.json();
  return data;
};

export const bookAppointment = async (data) => {
  const res = await fetch(`${API_URL}/appointments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getAppointments = async () => {
  const res = await fetch(`${API_URL}/appointments`);
  return res.json();
};

export const cancelAppointment = async (id) => {
  await fetch(`${API_URL}/appointments/${id}`, { method: "DELETE" });
};
