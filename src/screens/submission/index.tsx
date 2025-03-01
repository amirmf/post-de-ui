import { Form, FormioProvider } from '@formio/react';

const Impressum = () => {
  return (
    <>
    <div>
        <Form src="https://formio.ostaadx.ai/postnachsendeauftrag" onSubmit={console.log} />
      </div>
      </>
  );
};

export default Impressum;
