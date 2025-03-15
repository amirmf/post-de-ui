import React from "react";
import ReactMarkdown from "react-markdown";

const success = () => {
  // const txt=``;
  return (
    <div className="well">
      <h2 className="box-title">Bestellung erfolgreich abgeschlossen.</h2>
      <hr />
      
      <div style={{textAlign:"left",lineHeight:"30px",color:"black"}}>
        <p>Vielen Dank für Ihr Vertrauen! Ihr Nachsendeauftrag wurde erfolgreich eingerichtet und wird in Kürze aktiviert.</p>
        <p>Die nächsten Schritte:</p>
        <p>
          <ol>
            <li>
              <b>Bestätigungs-E-Mail erhalten</b> In wenigen Minuten senden wir Ihnen eine Bestätigungs-E-Mail mit allen Details zu Ihrem Nachsendeauftrag. Bitte prüfen Sie Ihren Posteingang sowie Ihren Spam-Ordner, falls die E-Mail nicht sofort ankommt.
            </li>
            <li>
              <b>Automatische Aktivierung</b> Ihr Nachsendeauftrag tritt zum vereinbarten Datum in Kraft. Ab dann wird Ihre Post zuverlässig an Ihre neue Adresse weitergeleitet - ganz ohne weiteres Zutun.
            </li>
            <li>
              <b>Entspannt zurücklehnen</b> Alles ist erledigt! Ihre Post erreicht Sie sicher und pünktlich - wir kümmern uns um den Rest.
            </li>
          </ol>
        </p>
        <div>Haben Sie Fragen? Wir sind für Sie da!</div>
        <div>Unser Kundenservice hilft Ihnen jederzeit gerne weiter.</div>
        <div>Kontakt: info@nachsendeauftrag-buchen.de</div>
        <div>Vielen Dank, dass Sie unseren Service nutzen! Wir wünschen Ihnen einen reibungslosen Umzug und alles Gute in Ihrem neuen Zuhause!</div>
        <div className="home-holder">
        <button 
        
        onClick={() => {
          window.location.href="/"
        }}
      >
        Home
      </button>
        </div>
      </div>
    </div>
  );
};

export default success;
