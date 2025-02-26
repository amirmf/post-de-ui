import { Link, Outlet } from "react-router-dom";
import HeaderImg from "assets/images/header.jpg";
import BG from "../../assets/images/bg.jpg";

const MainLayout: React.FC = () => {
  return (
    <div style={{
      height: "100vh",
      overflowY: "auto"
    }}>
              <img src={HeaderImg} alt="Logo" height={100} style={{ width: "100vw" }} />

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
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
          height: "100%",
          overflowY: "auto"
        }}
      >
        <div
          style={{ padding: 15, marginBottom: 20, maxWidth: 1140, width: 940, height:"100vh" }}
        >
          <div
            style={{
              backgroundColor: "transparent",
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
      <nav
        style={{
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          background: "#ffffff5c",
        }}
      >
        <Link to="/">Home</Link>|<Link to="/impressum">Impressum</Link>|
        <Link to="/privacyPolicy">Privacy Policy</Link>|
        <Link to="/termsAndCondition">Terms And Condition</Link>|
        <Link to="/cancelationPolicy">Cancellation Policy</Link>|
        <Link to="/faq">FAQ</Link>
      </nav>
    </div>
    </div>
  );
};

export default MainLayout;
