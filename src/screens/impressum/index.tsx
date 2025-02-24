const Impressum = () => {
  return (
    <div className="well">
      <h2 className="box-title">Impressum</h2>
      <hr />

      <h4>Adresse</h4>
      <p>
        Digitaler Post Service - FZCO
        <br />
        Dubai Silicon Oasis, Dubai, UAE
        <br />
        Lizenznummer: 55663
        <br />
        <br />
        E-Mail:{" "}
        <a href="mailto:info@post-nachsenden.de">info@post-nachsenden.de</a>
      </p>

      <h4>Steuer-Identifikationsnummer</h4>
      <p>104813472800001</p>

      <h4>Handelsregister</h4>
      <p>Dubai Free Zone Authority</p>

      <h4>Streitbeilegung</h4>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit, die Sie
        <a
          href="//ec.europa.eu/consumers/odr"
          target="_blank"
          rel="noopener noreferrer"
        >
          hier
        </a>
        finden. Zur Teilnahme an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht
        bereit.
      </p>
    </div>
  );
};

export default Impressum;
