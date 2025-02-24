const FAQ = () => {
  return (
    <div className="well">
      <h2 className="box-title">Frequently Asked Questions</h2>
      <hr />

      <h4>1. When should the postal service forwarding be used?</h4>
      <ul className="list-group">
        <li className="list-group-item">
          a. In the event of changes to the address of letters for the following
          reasons:
        </li>
        <li className="list-group-item">b. Temporary absence</li>
        <li className="list-group-item">c. Moving</li>
        <li className="list-group-item">d. Death</li>
      </ul>

      <h4 style={{ paddingTop: "5px" }}>
        2. How much does a forwarding order cost?
      </h4>
      <p className="text-justify">
        The costs for a forwarding order vary depending on whether you are
        ordering as a private individual or a business. It is also important how
        long the forwarding order is for, whether 6 or 12 months.
      </p>

      <h4 style={{ paddingTop: "15px" }}>3. How can I pay you?</h4>
      <p className="text-justify">
        We offer you the option of payment by invoice.
      </p>

      <h4 style={{ paddingTop: "15px" }}>
        4. Where can I get the invoice for my order?
      </h4>
      <p className="text-justify">
        The invoice will be sent automatically to the email address you provided
        after your order.
      </p>
    </div>
  );
};

export default FAQ;
