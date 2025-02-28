import React from "react";
import HeaderImg from "assets/images/header2.jpg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "#ffcc01",
        width: "100vw",
        paddingLeft: 100,
      }}
    >
      <div
        style={{
          height: 100,
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          onClick={() => navigate("/")}
          src={HeaderImg}
          alt="Logo"
          width={600}
          height={60}
          style={{
            cursor: "pointer",
            display: "inline-block",
          }}
        />
      </div>
    </div>
  );
};

export default Header;
