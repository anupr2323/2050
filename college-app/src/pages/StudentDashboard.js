import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import bg from "../assets/studentbg.jpg";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale);

function StudentDashboard() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const data = {
    labels: ["DAA", "DT", "FSD", "ATC", "LSS"],
    datasets: [
      {
        label: "Attendance %",
        data: [90, 85, 95, 80, 88]
      }
    ]
  };

  const attendanceData = [
    { date: "01 Mar", subject: "DAA", teacher: "Prof. Kumar", status: "Present", in: "9:00 AM", out: "10:00 AM" },
    { date: "02 Mar", subject: "DT", teacher: "Prof. Meena", status: "Absent", in: "-", out: "-" },
    { date: "03 Mar", subject: "FSD", teacher: "Prof. Rahul", status: "Present", in: "11:00 AM", out: "12:00 PM" },
    { date: "04 Mar", subject: "ATC", teacher: "Prof. Sharma", status: "Present", in: "1:00 PM", out: "2:00 PM" },
    { date: "05 Mar", subject: "LSS", teacher: "Prof. Anita", status: "Present", in: "2:00 PM", out: "3:00 PM" }
  ];

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

        <h2 style={styles.title}>Student Dashboard</h2>

        {/* Graph */}
        <div style={styles.card}>
          <h3>📊 Monthly Attendance</h3>
          <Bar data={data} />
        </div>

        {/* Table */}
        <div style={styles.card}>
          <h3>📋 Attendance Details</h3>

          <table style={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Subject</th>
                <th>Teacher</th>
                <th>Status</th>
                <th>In</th>
                <th>Out</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((item, i) => (
                <tr key={i}>
                  <td>{item.date}</td>
                  <td>{item.subject}</td>
                  <td>{item.teacher}</td>
                  <td>{item.status}</td>
                  <td>{item.in}</td>
                  <td>{item.out}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Assignment Upload */}
        <div style={styles.card}>
          <h3>📤 Upload Assignment</h3>

          <input type="file" onChange={(e) => setFile(e.target.files[0])} />

          <button style={styles.btn} onClick={() => {
            if (file) alert("Assignment Uploaded!");
            else alert("Select file first");
          }}>
            Upload
          </button>
        </div>

        {/* Services */}
        <div style={styles.card}>
          <h3>Services</h3>

          <button style={styles.btn} onClick={() => navigate("/food")}>
            🍔 Order Food
          </button>

          <button style={styles.btn} onClick={() => navigate("/transport")}>
            🚗 Book Robo Vehicle
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
  title: {
    textAlign: "center"
  },
  card: {
    background: "rgba(255,255,255,0.9)",
    color: "black",
    padding: "15px",
    margin: "15px",
    borderRadius: "10px"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse"
  },
  btn: {
    marginTop: "10px",
    padding: "10px",
    background: "#6a0dad",
    color: "white",
    border: "none",
    borderRadius: "8px",
    width: "100%"
  }
};

export default StudentDashboard;