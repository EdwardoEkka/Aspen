import React from "react";

const Navbar = () => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#FFFFFF",
          borderTopLeftRadius: "32px",
          borderTopRightRadius: "32px",
          boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1)",
          padding: "12px 0",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <img style={{ width: "24px" }} src="./icons/Home.png" alt="Home" />
          </li>
          <li>
            <img
              style={{ width: "24px" }}
              src="./icons/Ticket.png"
              alt="Ticket"
            />
          </li>
          <li>
            <img style={{ width: "24px" }} src="./icons/Heart.png" alt="Heart" />
          </li>
          <li>
            <img
              style={{ width: "24px" }}
              src="./icons/Profile.png"
              alt="Profile"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;