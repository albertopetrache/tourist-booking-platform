const BASE_URL = "http://localhost:5000/api"; // backend URL

export const api = {
  register: async (user: { name: string; email: string; password: string }) => {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Register failed");
    }

    return data;
  },

  login: async (user: { email: string; password: string }) => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data;
  },


  // Create booking
  createBooking: async (booking: { user: string; offer: string; date: string }, token: string) => {
    const res = await fetch(`${BASE_URL}/bookings`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(booking),
    });
    if (!res.ok) throw new Error("Booking failed");
    return res.json();
  },
};