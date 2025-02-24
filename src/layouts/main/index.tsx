import { Link, Outlet } from "react-router-dom";
import HeaderImg from "assets/images/header.png";

const MainLayout: React.FC = () => {
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
      <div
        style={{ marginBottom: 20, backgroundColor: "#ffcc00", padding: 15 }}
      >
        <img src={HeaderImg} alt="Logo" style={{ maxWidth: "100%" }} />
      </div>

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
      <nav
        style={{
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <Link to="/">Home</Link>|<Link to="/impressum">Impressum</Link>|
        <Link to="/privacyPolicy">Privacy Policy</Link>|
        <Link to="/termsAndCondition">Terms And Condition</Link>|
        <Link to="/cancelationPolicy">Cancellation Policy</Link>|
        <Link to="/faq">FAQ</Link>
      </nav>
    </div>
  );
};

export default MainLayout;
