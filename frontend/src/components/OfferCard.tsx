type OfferCardProps = {
  title: string;
  description: string;
  price: string;
  imageUrl?: string;
};

const OfferCard = ({ title, description, price, imageUrl }: OfferCardProps) => {
  return (
    <div style={styles.card}>
      {imageUrl && <img src={imageUrl} alt={title} style={styles.image} />}
      <h3>{title}</h3>
      <p>{description}</p>
      <p style={styles.price}>Price: {price}</p>
      <button style={styles.button}>View Details</button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    width: "250px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
  },
  image: {
    width: "100%",
    borderRadius: "6px",
  },
  price: {
    fontWeight: "bold",
    color: "#0d6efd",
  },
  button: {
    marginTop: "auto",
    padding: "8px",
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default OfferCard;