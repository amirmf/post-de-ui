import React from "react";

const TermsAndConditions = () => {
  const Styles = {
    listGroup: {
      listStyle: "none",
        padding: 0,
    },
    listGroupItem: {
      padding: "10px 15px",
      border: "1px solid lightgray",
      borderRadius: 8
    },
  }
  return (
    <div className="well">
      <h2 className="box-title">Allgemeine Geschäftsbedingungen
      </h2>
      <hr />

      <h4>1. Geltungsbereich      </h4>
      <ul style={Styles.listGroup}>
        <li style={Styles.listGroupItem}>
        a. Für alle Bestellungen über unseren Online-Shop durch Verbraucher und Unternehmer gelten die nachfolgenden AGB. Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können. Unternehmer ist eine natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt. Gegenüber Unternehmern gilt: Verwendet der Unternehmer entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen, wird deren Geltung hiermit widersprochen; sie werden nur dann Vertragsbestandteil, wenn wir dem ausdrücklich zugestimmt haben.
        </li>
      </ul>

      <h4>2. Leistungen</h4>
      <ul style={Styles.listGroup}>
        <div style={Styles.listGroupItem}>
        <li style={{
          paddingBottom: 10,
          borderBottom: "1px solid lightgray"
        }}>
          a. Die Webseite post-nachsenden.de ermöglicht dem Nutzer einen sogenannten Nachsendeauftrag zu beauftragen
        </li>
        <li style={{
          paddingBottom: 10,
          paddingTop: 10,
          borderBottom: "1px solid lightgray"
        }}>
          b. Durch bestätigen der AGB erteilt der Kunde post-nachsenden.de eine Bevollmächtigung für die Bearbeitung des Nachsendeauftrags.
        </li>
        <li style={{
          paddingBottom: 10,
          paddingTop: 10,
          borderBottom: "1px solid lightgray"
        }}>
          c. Nach der Bestellung durch den Kunden wird der Nachsendeauftrag bei dem Postdienstleister beantragt.
        </li>
        <li style={{
          paddingBottom: 10,
          paddingTop: 10,
          borderBottom: "1px solid lightgray"
        }}>
          d. An den Postdienstleister werden die Kontaktdaten des Kunden übermittelt.

        </li>
        <li style={{
          paddingBottom: 10,
          paddingTop: 10,
          borderBottom: "1px solid lightgray"
        }}>
          e. post-nachsenden.de führt lediglich die Dienstleistung der Beantragung bei dem Postdienstleister durch und ist für keine Leistungen oder Ansprüche der Postdienstleister haftbar.
        </li>
        <li style={{
          paddingBottom: 10,
          paddingTop: 10,
        }}>
          f. Die Webseite post-nachsenden.de ist keine Website von der Post und ist rechtlich auch nicht damit verbunden.
        </li>
        </div>
      </ul>

      <h4>3. Zahlungsbedingungen, Preise und Rechnung</h4>
      <ul style={Styles.listGroup}>
      <div style={Styles.listGroupItem}>
        <li  style={{
          paddingBottom: 10,
          borderBottom: "1px solid lightgray"
        }}>
        a. Alle Preise sind Bruttopreise inkl. Umsatzsteuer in der jeweils gültigen Fassung.
        </li>
        <li  style={{
          paddingBottom: 10,
          paddingTop: 10,
          borderBottom: "1px solid lightgray"
        }}>
        b. Der Kunde hat die vereinbarten Entgelte im Voraus mit einer der im Bestellprozess angegebenen Zahlungsmöglichkeiten zu entrichten. Nach Vertragsschluss ist eine Änderung der Zahlungsart nicht mehr möglich
        </li>
        <li  style={{
          paddingBottom: 10,
          paddingTop: 10,
        }}>
        c. Der Kunde ist damit einverstanden, dass ihm die Rechnung im PDF-Format an die angegebene E-Mailadresse zugestellt wird.        </li>
        </div>
      </ul>

      <h4>4. Pflichten des Nutzers      </h4>
      <ul style={Styles.listGroup}>
      <div style={Styles.listGroupItem}>
        <li  style={{
          paddingBottom: 10,
          borderBottom: "1px solid lightgray"
        }}>
        a. Der Nutzer Verpflichtet sich dazu, die zu tätigen Eingaben recherchiert, überprüft und diese wahrheitsgemäß eingetragen zu haben.

        </li>
        <li  style={{
          paddingBottom: 10,
          paddingTop: 10,
        }}>
        b. Der Nutzer Verpflichtet sich für Auftragsbestätigungen, Rechnungen und Wiederrufs Formulare von post-nachsenden.de unter der von ihm eingetragenen E-Mail-Adresse ein jederzeit erreichbares Postfach bereitzustellen.

        </li>
        </div>
      </ul>

      <h4>5. Haftungsbeschränkung
      </h4>
      <ul style={Styles.listGroup}>
        <li style={Styles.listGroupItem}>
        a. Für Ansprüche aufgrund von Schäden, die durch uns, unsere gesetzlichen Vertreter oder Erfüllungsgehilfen verursacht wurden, haften wir stets unbeschränkt

          <br />- bei Verletzung des Lebens, des Körpers oder der Gesundheit
          <br />- bei vorsätzlicher oder grob fahrlässiger Pflichtverletzung
          <br />- bei Garantieversprechen, soweit vereinbart, oder
          <br />- soweit der Anwendungsbereich des Produkthaftungsgesetzes eröffnet ist.
        </li>
      </ul>

      <h4>6. Streitbeilegung      </h4>
      <ul style={Styles.listGroup}>
        <li style={Styles.listGroupItem}>
        a. Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie
          <a
            href="//ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            hier
          </a>
          finden. Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.
        </li>
      </ul>

      <h4>7. Schlussbestimmungen
      </h4>
      <ul style={Styles.listGroup}>
        <li style={Styles.listGroupItem}>
        a. Sind Sie Unternehmer, dann gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
        </li>
      </ul>
    </div>
  );
};

export default TermsAndConditions;
