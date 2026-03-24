import { useState } from "react";

function TransportPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [result, setResult] = useState(null);

  const handleBooking = () => {
    if (!from || !to) {
      alert("Enter both locations");
      return;
    }

    // Fake calculation (you can upgrade later)
    const distance = Math.floor(Math.random() * 5) + 1; // km
    const time = distance * 5; // minutes
    const cost = distance * 20; // ₹

    setResult({ distance, time, cost });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🚗 Robo Vehicle Booking</h2>

      <input
        placeholder="Enter Origin (e.g. Library)"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        style={styles.input}
      />

      <input
        placeholder="Enter Destination (e.g. Hostel)"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        style={styles.input}
      />

      <button style={styles.btn} onClick={handleBooking}>
        Check Availability
      </button>

      {/* RESULT */}
      {result && (
        <div style={styles.card}>
          <h3>Booking Details</h3>
          <p>Distance: {result.distance} km</p>
          <p>Arrival Time: {result.time} mins</p>
          <p>Cost: ₹{result.cost}</p>

          {/* MAP */}
          <iframe
            title="map"
            width="100%"
            height="200"
            style={{ border: 0, marginTop: "10px" }}
            src={`https://www.google.com/maps?q=${from} ${to}&output=embed`}
          ></iframe>

          <button style={styles.btn}>Confirm Booking</button>
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
    borderRadius: "8px",
    cursor: "pointer"
  },
  card: {
    marginTop: "20px",
    padding: "15px",
    background: "#f3f3f3",
    borderRadius: "10px"
  }
};

export default TransportPage;