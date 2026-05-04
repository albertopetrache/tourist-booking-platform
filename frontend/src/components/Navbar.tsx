import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>E-Tourism</Link>
      </div>

      {/* Navigation Links */}
      <ul style={styles.links}>
        <li>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li>
          <Link to="/offers" style={styles.link}>Offers</Link>
        </li>
        {isLoggedIn && (
          <>
            <li>
              <Link to="/profile" style={styles.link}>Profile</Link>
            </li>
            <li>
              <Link to="/booking" style={styles.link}>Booking</Link>
            </li>
          </>
        )}
        {!isLoggedIn ? (
          <>
            <li>
              <Link to="/login" style={styles.link} onClick={() => setIsLoggedIn(true)}>Login</Link>
            </li>
            <li>
              <Link to="/register" style={styles.link}>Register</Link>
            </li>
          </>
        ) : (
          <li>
            <button style={styles.button} onClick={() => setIsLoggedIn(false)}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
    nav: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    backgroundColor: "#0d6efd",
    color: "white",
    zIndex: 1000,
    boxSizing: "border-box", 
    overflowX: "hidden",     // <--- prevenim scroll orizontal
    },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  logoLink: {
    color: "white",
    textDecoration: "none",
  },
  links: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    alignItems: "center",
  },
  link: {
    cursor: "pointer",
    fontWeight: 500,
    color: "white",
    textDecoration: "none",
  },
  button: {
    background: "transparent",
    border: "1px solid white",
    color: "white",
    padding: "6px 12px",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default Navbar;