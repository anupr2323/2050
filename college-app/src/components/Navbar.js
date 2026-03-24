import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div style={{ background: "#ff3d00", color: "white", padding: 10, textAlign: "center" }}>
        GCU Knowledge Park
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", padding: 10 }}>
        <img src={logo} alt="logo" style={{ height: 40 }} />

        <button onClick={() => setOpen(!open)}>☰</button>
      </div>

      {open && (
        <div style={{ background: "#eee", padding: 10 }}>
          <p>Home</p>
          <p>Academics</p>
          <p>Facilities</p>
        </div>
      )}
    </div>
  );
}

export default Navbar;