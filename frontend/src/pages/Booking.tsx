import { useState, useEffect } from "react";
import { api } from "../api";

type Offer = {
  _id: string;
  title: string;
};

const Booking = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [selectedOffer, setSelectedOffer] = useState<string>("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  // Fetch offers for selection
  useEffect(() => {
    api.getOffers()
      .then((data) => setOffers(data))
      .catch((err) => console.error(err));
  }, []);

  const handleBooking = async () => {
    const token = localStorage.getItem("token");
    if (!token) return setMessage("Please login first");

    if (!selectedOffer || !date) {
      return setMessage("Please select an offer and date");
    }

    try {
      // Send booking to backend (no need to assign return)
      await api.createBooking({ user: "userId", offer: selectedOffer, date }, token);
      setMessage("Booking created successfully!");
    } catch (err: any) {
      setMessage(err.message || "Booking failed");
    }
  };

  return (
    <div>
      <h1>Booking Page</h1>

      <label>
        Select Offer:
        <select value={selectedOffer} onChange={(e) => setSelectedOffer(e.target.value)}>
          <option value="">--Choose an offer--</option>
          {offers.map((offer) => (
            <option key={offer._id} value={offer._id}>
              {offer.title}
            </option>
          ))}
        </select>
      </label>

      <br />

      <label>
        Select Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>

      <br />

      <button onClick={handleBooking}>Book Now</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Booking;