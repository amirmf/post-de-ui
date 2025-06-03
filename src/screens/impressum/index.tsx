const Impressum = () => {
  return (
    <div className="well">
      <h2 className="box-title">Impressum</h2>
      <hr />

      <h4>Adresse</h4>
      <p>
        Digital Service Solutions LLC
        <br />
        Sharjah Media City, Sharjah, UAE 
        <br />
        Lizenznummer: 2536699.01
        <br />
        Steuer-Identifikationsnummer:: 104979929700001
        <br />
        E-Mail:{" "}
        <a href="mailto:info@nachsendeauftrag-buchen.de">info@nachsendeauftrag-buchen.de</a>
      </p>

      <h4>Handelsregister</h4>
      <p>Sharjah Freezone Authority</p>

      <h4>Streitbeilegung</h4>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit, die Sie
         <a
          href="//ec.europa.eu/consumers/odr"
          target="_blank"
          rel="noopener noreferrer"
        >
           &nbsp;hier&nbsp; 
        </a>
         finden. Zur Teilnahme an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht
        bereit.
      </p>
    </div>
  );
};

export default Impressum;
