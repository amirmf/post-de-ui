import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="well">
      <h2 className="box-title">Privacy Policy</h2>
      <hr />
      <h5>
        <b>The person responsible for data processing is:</b>
      </h5>
      <p>
        Digital Post Service -FZCO <br />
        Dubai Silicon Oasis, Dubai, UAE <br />
        License number: 55663 <br />
        Email: info@post-nachsenden.de
      </p>
      <p>
        We are pleased that you are interested in our website. The protection of
        your privacy is very important to us. Below we provide you with detailed
        information about how we handle your personal data.
      </p>

      <h5>
        <b>Scope</b>
      </h5>
      <p className="text-justify">
        This privacy policy is intended to inform the users of this website
        about the type, scope, and purpose of the collection and use of personal
        data in accordance with the EU General Data Protection Regulation
        (GDPR), the Federal Data Protection Act, and the TDDDG.
      </p>
      <p className="text-justify">
        Please remember that data transmission over the Internet can always be
        subject to security gaps. Complete protection against access by
        strangers is not possible.
      </p>

      <h5>
        <b>Access Data and Hosting</b>
      </h5>
      <p>
        Every time you visit the website, your browser automatically transmits
        information to our server, including:
      </p>
      <ul>
        <li>Visited website</li>
        <li>Pages of the website visited</li>
        <li>Time of access</li>
        <li>Amount of data sent in bytes</li>
        <li>Source/reference from which you came to the page</li>
        <li>Browser used</li>
        <li>Operating system used</li>
        <li>IP address used</li>
        <li>Session cookie (for session recognition, lifetime: one session)</li>
        <li>Long-term cookie (to store the shopping cart: 24 hours)</li>
        <li>Internal resolution of the browser window</li>
        <li>Screen resolution</li>
        <li>JavaScript activation</li>
        <li>Java On/Off</li>
        <li>Cookies On/Off</li>
        <li>Form contents (only filled in or not filled in is transmitted)</li>
      </ul>
      <p className="text-justify">
        The responsible party processes this data to display the website
        securely and correctly. Additionally, statistical evaluations help
        improve the website after anonymizing the data.
      </p>

      <h5>
        <b>Cookies</b>
      </h5>
      <p className="text-justify">
        This website uses cookies to enhance user experience and security. You
        can disable cookies in your browser settings, but this may limit some
        functionalities.
      </p>

      <h5>
        <b>Handling of Contact Data</b>
      </h5>
      <p className="text-justify">
        If you contact us via provided contact options, the personal data you
        provide will be processed to respond to your request. The legal basis
        for this is your consent under GDPR Art. 6(1)(a), which you can revoke
        at any time.
      </p>

      <h5>
        <b>Data Processing and Transmission Upon Contract Conclusion</b>
      </h5>
      <p className="text-justify">
        If you set up a forwarding order via the website, we process your data
        to fulfill our contractual obligations. This data may be transmitted to
        Deutsche Post for processing.
      </p>

      <h5>
        <b>Storage Period</b>
      </h5>
      <p className="text-justify">
        We store your data only as long as necessary for the stated purposes or
        until you revoke your consent.
      </p>

      <h5>
        <b>Contact Options and Your Rights</b>
      </h5>
      <p>As a data subject, you have the following rights:</p>
      <ul>
        <li>
          Right to request information about your personal data (GDPR Art. 15)
        </li>
        <li>
          Right to request rectification of inaccurate data (GDPR Art. 16)
        </li>
        <li>
          Right to request deletion of data unless processing is necessary for
          legal or public interest reasons (GDPR Art. 17)
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
