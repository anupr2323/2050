import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import bg from "../assets/teacherbg.jpg";

function TeacherDashboard() {
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState("");
  const [list, setList] = useState([]);

  const handleUpload = () => {
    if (!assignment) {
      alert("Enter assignment");
      return;
    }
    setList([...list, assignment]);
    setAssignment("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div style={styles.overlay}>
        <Navbar />

        <h2 style={{ textAlign: "center" }}>Teacher Dashboard</h2>

        {/* Info */}
        <div style={styles.card}>
          <h3>👨‍🏫 Personal Info</h3>
          <p>Name: Professor XYZ</p>
          <p>Department: CSE</p>
          <p>Subjects: DAA, FSD</p>
        </div>

        {/* Upload */}
        <div style={styles.card}>
          <h3>📘 Upload Assignment</h3>

          <input
            value={assignment}
            onChange={(e) => setAssignment(e.target.value)}
            placeholder="Assignment title"
            style={{ width: "100%", padding: "10px" }}
          />

          <button style={styles.btn} onClick={handleUpload}>
            Upload
          </button>
        </div>

        {/* List */}
        <div style={styles.card}>
          <h3>📥 Assignments</h3>

          {list.length === 0 ? (
            <p>No assignments</p>
          ) : (
            list.map((a, i) => (
              <div key={i} style={styles.box}>{a}</div>
            ))
          )}
        </div>

        {/* Services */}
        <div style={styles.card}>
          <h3>Services</h3>

          <button style={styles.btn} onClick={() => navigate("/food")}>
            🍔 Food
          </button>

          <button style={styles.btn} onClick={() => navigate("/transport")}>
            🚗 Transport
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    background: "rgba(0,0,0,0.6)",
    minHeight: "100vh",
    padding: "10px",
    color: "white"
  },
  card: {
    background: "rgba(255,255,255,0.9)",
    color: "black",
    padding: "15px",
    margin: "15px",
    borderRadius: "10px"
  },
  btn: {
    marginTop: "10px",
    padding: "10px",
    background: "#6a0dad",
    color: "white",
    border: "none",
    borderRadius: "8px",
    width: "100%"
  },
  box: {
    background: "#eee",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "5px"
  }
};

export default TeacherDashboard;