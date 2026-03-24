import { useNavigate } from "react-router-dom";
import bg from "../assets/college1.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        background: `url(${bg})`,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.6)",
          padding: "30px",
          borderRadius: "10px",
          color: "white",
          textAlign: "center"
        }}
      >
        <h1>Welcome to College App</h1>

        <button
          onClick={() => navigate("/login")}
          style={{
            padding: "10px 20px",
            background: "#ff3d00",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}

export default Home;