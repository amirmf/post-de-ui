import { Outlet } from "react-router-dom";
import Navbar from "layouts/components/nvabar";
import Header from "layouts/components/header";

const SecondaryLayout: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
        // minHeight: "-webkit-fill-available",
        // width: "100vw",
        textAlign: "center",
        overflowY: "auto",
      }}
    >
      {/* Top Image */}
      <Header />
      {/* Middle Content */}
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{ padding: "15px 0", marginBottom: 20, maxWidth: "850px", width: "100%", margin:"0 auto" }}
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
