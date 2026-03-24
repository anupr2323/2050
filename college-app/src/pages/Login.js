import { useNavigate } from "react-router-dom";
import { useState } from "react";
import bg from "../assets/loginbg.jpg";

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");

  const handleLogin = () => {
    if (role === "student") navigate("/student");
    else navigate("/teacher");
  };

  return (
    <div
      style={{
        height: "100vh",
        background: `url(${bg})`,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {/* Overlay */}
      <div
        style={{
          background: "rgba(0,0,0,0.6)",
          padding: "30px",
          borderRadius: "10px",
          width: "300px",
          color: "white",
          textAlign: "center"
        }}
      >
        <h2>Login</h2>

        <input
          placeholder="Username"
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <select
          onChange={(e) => setRole(e.target.value)}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            background: "#6a0dad",
            color: "white",
            border: "none",
            borderRadius: "8px"
          }}
        >
          Login
        </button>

        <p style={{ marginTop: "10px", cursor: "pointer" }}>
          Forgot Password?
        </p>
      </div>
    </div>
  );
}

export default Login;