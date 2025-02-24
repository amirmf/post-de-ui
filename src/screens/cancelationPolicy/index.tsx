const CancellationPolicy = () => {
  return (
    <div className="well">
      <h2 className="box-title">Cancellation Policy</h2>
      <hr />
      <h3>Right of Withdrawal</h3>
      <p className="text-justify">
        You have the right to withdraw from this contract within fourteen days
        without giving any reason.
      </p>
      <p className="text-justify">
        The cancellation period shall be fourteen days from the day on which the
        contract is concluded.
      </p>
      <p className="text-justify">
        To exercise your right of withdrawal, you must inform us (Digital Post
        Service - FZCO, Dubai Silicon Oasis, Dubai, UAE, email:
        <a href="mailto:info@post-nachsenden.de">info@post-nachsenden.de</a>) of
        your decision to withdraw from this contract by means of a clear
        statement (e.g., a letter sent by post or an email). You can use the
        attached
        <a
          href="/pdf/Muster-Widerrufsformular.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          model withdrawal form
        </a>
        for this purpose, but this is not mandatory.
      </p>
      <p className="text-justify">
        To meet the cancellation deadline, it is sufficient for you to send your
        communication concerning your exercise of the right of cancellation
        before the cancellation period has expired.
      </p>
      <h3>Consequences of Revocation</h3>
      <p className="text-justify">
        If you cancel this contract, we will refund all payments that we have
        received from you, including delivery costs (with the exception of
        additional costs resulting from your choice of a type of delivery other
        than the cheapest standard delivery offered by us), promptly and at the
        latest within fourteen days from the day on which we received
        notification of your cancellation of this contract. For this refund, we
        will use the same means of payment that you used for the original
        transaction, unless something else was expressly agreed with you; under
        no circumstances will you be charged any fees for this refund.
      </p>
      <p className="text-justify">
        If you have requested that the services begin during the cancellation
        period, you must pay us an appropriate amount corresponding to the
        proportion of the services already provided up to the point at which you
        notify us of the exercise of the right of cancellation with regard to
        this contract compared to the total scope of the services provided for
        in the contract.
      </p>
    </div>
  );
};

export default CancellationPolicy;
