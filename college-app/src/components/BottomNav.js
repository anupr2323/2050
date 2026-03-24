import { useNavigate } from "react-router-dom";

function BottomNav() {
  const nav = useNavigate();

  return (
    <div style={styles.nav}>
      <button onClick={() => nav("/student")}>🏠</button>
      <button onClick={() => nav("/food")}>🍔</button>
      <button onClick={() => nav("/transport")}>🚗</button>
    </div>
  );
}

const styles = {
  nav: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    background: "#6a0dad",
    padding: 10
  }
};

export default BottomNav;