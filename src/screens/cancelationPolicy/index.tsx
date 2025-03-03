import ReactMarkdown from "react-markdown";

const CancellationPolicy = () => {
 
   const txt=`
 
**Widerrufsrecht:**

Sie haben das Recht, diesen Vertrag innerhalb von vierzehn Tagen ohne Angabe von Gründen zu widerrufen.

Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.

Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Digital Service Solutions, FZCO, Dubai Silicon Oasis, Dubai, UAE, E-Mail: info@nachsendeauftrag-buchen.de) mittels einer eindeutigen Erklärung (z. B. per Post oder E-Mail) über Ihre Entscheidung, den Vertrag zu widerrufen, informieren. Hierfür können Sie das beigefügte [Muster-Widerrufsformular](https://postde.ostaadx.ai/Muster.pdf) verwenden, dessen Nutzung jedoch nicht verpflichtend ist.

Das beigefügte Muster-Widerrufsformular finden Sie auch hier.

Zur Wahrung der Widerrufsfrist genügt es, wenn Sie die Mitteilung über die Ausübung Ihres Widerrufsrechts vor Ablauf der Frist absenden.

**Folgen des Widerrufs:**

Wenn Sie diesen Vertrag widerrufen, erstatten wir Ihnen sämtliche Zahlungen, die wir von Ihnen erhalten haben, einschließlich etwaiger Lieferkosten (mit Ausnahme zusätzlicher Kosten, die dadurch entstehen, dass Sie eine andere als die von uns angebotene, kostengünstigste Standardlieferung gewählt haben). Die Rückzahlung erfolgt unverzüglich und spätestens binnen vierzehn Tagen ab dem Zeitpunkt, an dem uns Ihre Widerrufserklärung zugegangen ist.

Für die Rückerstattung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, es wurde ausdrücklich eine andere Vereinbarung mit Ihnen getroffen. Ihnen entstehen durch diese Rückzahlung keine zusätzlichen Gebühren.

Haben Sie verlangt, dass die Erbringung der Dienstleistung bereits während der Widerrufsfrist beginnt, so sind Sie verpflichtet, uns einen angemessenen Betrag zu zahlen. Dieser Betrag entspricht dem Anteil der bereits erbrachten Leistungen im Verhältnis zum Gesamtumfang der vertraglich vereinbarten Dienstleistungen bis zu dem Zeitpunkt, an dem Sie uns über die Ausübung Ihres Widerrufsrechts informieren.`;
   return (
     <div className="well">
       <h2 className="box-title">Widerrufsbelehrung</h2>
       <hr />
           <ReactMarkdown>{txt}</ReactMarkdown>
     </div>
   );
 };

export default CancellationPolicy;
