import { useEffect, useState } from "react";
import OfferCard from "../components/OfferCard";
import { api } from "../api";

type Offer = {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl?: string;
};

const Offers = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getOffers()
      .then((data) => setOffers(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading offers...</p>;

  return (
    <div>
      <h1>Offers Page</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {offers.map((offer) => (
          <OfferCard
            key={offer._id}
            title={offer.title}
            description={offer.description}
            price={`$${offer.price}`}
            imageUrl={offer.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Offers;