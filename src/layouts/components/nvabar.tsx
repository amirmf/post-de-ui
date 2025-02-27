import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const Styles = {
        link: {
            color: "#337ab7",
            textDecoration: "none",
            fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize: 14
        },
        span: {
            color: "#337ab7"
        }
    }
  return (
    <nav
    style={{
      padding: "10px",
      display: "flex",
      justifyContent: "center",
      gap: "5px",
      background: "#ffffff5c",
    }}
  >
    <Link style={Styles.link} to="/">Home</Link><span style={Styles.span}>|</span>
    <Link style={Styles.link} to="/impressum">Impressum</Link><span style={Styles.span}>|</span>
    <Link style={Styles.link} to="/privacyPolicy">Datenschutz</Link><span style={Styles.span}>|</span>
    <Link style={Styles.link} to="/termsAndCondition"> AGB</Link><span style={Styles.span}>|</span>
    <Link style={Styles.link} to="/cancelationPolicy">Widerrufsbelehrung</Link><span style={Styles.span}>|</span>
    <Link style={Styles.link} to="/faq">FAQ</Link>
  </nav>
  )
}

export default Navbar