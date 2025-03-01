import { Outlet } from "react-router-dom";
import BG from "assets/images/bg.jpg";
import Navbar from "layouts/components/nvabar";
import Header from "layouts/components/header";

const MainLayout: React.FC = () => {
  return (
    <div style={{
      height: "100vh",
      overflowY: "auto"
    }}>
      <Header />

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh + 100px)",
        width: "100vw",
        textAlign: "center",
        background: `
          linear-gradient(to left, white 0%, rgba(255, 255, 255, 0.8) 20%, rgba(255, 255, 255, 0) 70%),
          url(${BG})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top Image */}

      {/* Middle Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          // height: "100%",
          // overflowY: "auto"
        }}
      >
        <div
          style={{ padding: 15, marginBottom: 20, width: "85%",margin:"0 auto 100px auto" }}
        >
          <div
            style={{
              backgroundColor: "#f2f2f2c7",
              padding: "20px 40px",
              borderRadius: "5px",
              textAlign: "left",
              width: "100%",
              maxWidth: "600px",
              justifySelf:"flex-end"
            }}
          >
            <Outlet />
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <Navbar />
    </div>
    </div>
  );
};

export default MainLayout;
