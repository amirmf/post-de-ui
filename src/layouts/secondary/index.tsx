import { Outlet } from "react-router-dom";
import HeaderImg from "assets/images/header.jpg";
import Navbar from "layouts/components/nvabar";

const SecondaryLayout: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        textAlign: "center",
        overflowY: "auto",
      }}
    >
      {/* Top Image */}
      <img src={HeaderImg} alt="Logo" height={100} style={{ width: "100vw" }} />


      {/* Middle Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{ padding: 15, marginBottom: 20, maxWidth: 1140, width: 940 }}
        >
          <div
            style={{
              border: "2px solid lightgray",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "5px",
              textAlign: "left",
            }}
          >
            <Outlet />
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <Navbar />
    </div>
  );
};

export default SecondaryLayout;
