import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="well">
      <h2 className="box-title">General terms and conditions of business</h2>
      <hr />

      <h4>1. Scope</h4>
      <ul className="list-group">
        <li className="list-group-item">
          a. The following terms and conditions apply to all orders placed
          through our online shop by consumers and businesses...
        </li>
      </ul>

      <h4>2. Services</h4>
      <ul className="list-group">
        <li className="list-group-item">
          a. The website post-nachsenden.de enables the user to place a
          so-called forwarding order.
        </li>
        <li className="list-group-item">
          b. By confirming the General Terms and Conditions, the customer grants
          post-nachsenden.de authorization to process the forwarding order.
        </li>
        <li className="list-group-item">
          c. After the customer has placed the order, the forwarding order is
          requested from the postal service provider.
        </li>
        <li className="list-group-item">
          d. The customer’s contact details are transmitted to the postal
          service provider.
        </li>
        <li className="list-group-item">
          e. post-nachsenden.de only carries out the application service with
          the postal service provider and is not liable for any services or
          claims of the postal service provider.
        </li>
        <li className="list-group-item">
          f. The website post-nachsenden.de is not a website of the post office
          and is not legally connected to it.
        </li>
      </ul>

      <h4>3. Terms of payment, prices and invoice</h4>
      <ul className="list-group">
        <li className="list-group-item">
          a. All prices are gross prices including VAT in the currently valid
          version.
        </li>
        <li className="list-group-item">
          b. The customer must pay the agreed fees in advance using one of the
          payment options specified in the ordering process...
        </li>
        <li className="list-group-item">
          c. The customer agrees that the invoice will be sent to him in PDF
          format to the specified email address.
        </li>
      </ul>

      <h4>4. Obligations of the user</h4>
      <ul className="list-group">
        <li className="list-group-item">
          a. The user undertakes to have researched and checked the entries to
          be made and to have entered them truthfully.
        </li>
        <li className="list-group-item">
          b. The user undertakes to provide a mailbox that can be reached at any
          time for order confirmations, invoices and cancellation forms...
        </li>
      </ul>

      <h4>5. Limitation of Liability</h4>
      <ul className="list-group">
        <li className="list-group-item">
          a. We are always liable without limitation for claims based on damage
          caused by us, our legal representatives or vicarious agents...
          <br />- in the event of injury to life, body or health
          <br />- in the event of intentional or grossly negligent breach of
          duty
          <br />- in the event of a guarantee promise, if agreed
          <br />- insofar as the scope of application of the Product Liability
          Act is open.
        </li>
      </ul>

      <h4>6. Dispute settlement</h4>
      <ul className="list-group">
        <li className="list-group-item">
          a. The European Commission provides a platform for online dispute
          resolution (ODR), which you can find
          <a
            href="//ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            here
          </a>
          . We are neither obliged nor willing to participate in a dispute
          resolution procedure before a consumer arbitration board.
        </li>
      </ul>

      <h4>7. Final provisions</h4>
      <ul className="list-group">
        <li className="list-group-item">
          a. If you are an entrepreneur, German law applies, excluding the UN
          Convention on Contracts for the International Sale of Goods.
        </li>
      </ul>
    </div>
  );
};

export default TermsAndConditions;
