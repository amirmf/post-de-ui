import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const Styles = {
        link: {
        },
        span: {
            color: "#337ab7",
            fontSize:"15px",
            padding: "0 5px"
        }
    }
  return (
    <nav
    style={{
      padding: "0 0 10px 0",
      display: "block",
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
    {/* <hr /> */}
    <p style={{ marginBottom:"-5px"}}> 
    Die Website nachsendeauftrag-buchen.de ist ein unabhängiger Online-Service, betrieben von Digital Service Solutions - FZCO.
    </p>
  </nav>
  )
}

export default Navbar