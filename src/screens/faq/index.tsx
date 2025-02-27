const FAQ = () => {
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
      <h2 className="box-title">Häufige Fragen
      </h2>
      <hr />

      <h4>1. Wann sollte der Nachsendeservice der Post genutzt werden?
      </h4>
      <ul style={Styles.listGroup}>
        <div style={Styles.listGroupItem}>
        <li style={{
          paddingBottom: 10,
          borderBottom: "1px solid lightgray"
        }}>
        a. Bei Änderungen der Anschrift von Briefen aus folgenden Gründen:

        </li>
        <li style={{
          paddingBottom: 10,
          paddingTop: 10,
          borderBottom: "1px solid lightgray"
        }}>b. Vorübergehende Abwesenheit
        </li>
        <li style={{
          paddingBottom: 10,
          paddingTop: 10,
          borderBottom: "1px solid lightgray"
        }}>c. Umzug
        </li>
        <li style={{
          paddingBottom: 10,
          paddingTop: 10,
        }}>d. Sterbefall
        </li>
        </div>
      </ul>

      <h4 style={{ paddingTop: "5px" }}>
      2. Wie hoch sind die Kosten für ein Nachsendeauftrag
      </h4>
      <p className="text-justify">
      Die Kosten für einen Nachsendeauftrag unterscheiden sich je nachdem ob Sie als Privatperson oder Gewerbe bestellen. Außerdem ist es entscheidend wie lange der Nachsendeauftrag beauftragt ist ob 6 oder 12 Monate.
      </p>

      <h4 style={{ paddingTop: "15px" }}>      3. Wie kann ich bei Ihnen bezahlen?
      </h4>
      <p className="text-justify">
      Wir bieten Ihnen die Zahlungsmöglichkeit per Rechnung an.

</p>

      <h4 style={{ paddingTop: "15px" }}>
      4. Wo bekomme ich die Rechnung zu meiner Bestellung
      </h4>
      <p className="text-justify">
      Die Rechnung wird automatisch nach Ihrer Bestellung an die von Ihnen angegebene E-Mail-Adresse versandt.
      </p>
    </div>
  );
};

export default FAQ;
