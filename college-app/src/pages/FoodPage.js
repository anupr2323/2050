import { useState } from "react";

function FoodPage() {
  const [food, setFood] = useState("");
  const [location, setLocation] = useState("");
  const [order, setOrder] = useState(null);

  const handleOrder = () => {
    if (!food || !location) {
      alert("Enter food and delivery location");
      return;
    }

    const time = Math.floor(Math.random() * 15) + 10;
    const cost = Math.floor(Math.random() * 100) + 50;

    setOrder({ time, cost });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🍔 Robo Food Delivery</h2>

      <input
        placeholder="Enter Food (Pizza, Burger...)"
        value={food}
        onChange={(e) => setFood(e.target.value)}
        style={styles.input}
      />

      <input
        placeholder="Delivery Location (Hostel, Block A...)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={styles.input}
      />

      <button style={styles.btn} onClick={handleOrder}>
        Order Food
      </button>

      {order && (
        <div style={styles.card}>
          <h3>Order Details</h3>
          <p>Food: {food}</p>
          <p>Delivery Time: {order.time} mins</p>
          <p>Cost: ₹{order.cost}</p>

          {/* MAP */}
          <iframe
            title="food-map"
            width="100%"
            height="200"
            style={{ border: 0, marginTop: "10px" }}
            src={`https://www.google.com/maps?q=${location}&output=embed`}
          ></iframe>

          <button style={styles.btn}>Confirm Order</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0"
  },
  btn: {
    width: "100%",
    padding: "10px",
    background: "#6a0dad",
    color: "white",
    border: "none",
    borderRadius: "8px"
  },
  card: {
    marginTop: "20px",
    padding: "15px",
    background: "#f3f3f3",
    borderRadius: "10px"
  }
};

export default FoodPage;