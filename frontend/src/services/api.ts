const API_URL = "http://localhost:5000/api"; 

export const api = {
  // Offers
  getOffers: async () => {
    const res = await fetch(`${API_URL}/offers`);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to fetch offers");
    }

    return data;
  },

  // Register
  register: async (user: { name: string; email: string; password: string }) => {
    const res = await fetch(`${API_URL}/auth/register`, {
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

  // Login
  login: async (user: { email: string; password: string }) => {
    const res = await fetch(`${API_URL}/auth/login`, {
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
};