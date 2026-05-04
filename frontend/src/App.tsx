import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Import pages
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import OfferDetails from "./pages/OfferDetails";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/offer-details" element={<OfferDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </>
  );
};

export default App;