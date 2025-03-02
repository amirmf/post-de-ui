import { Form, FormioProvider } from '@formio/react';
import { useState } from 'react';

const Submission = () => {
  const [result, setResult] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const loadData = {data:{}};
  const onSubmitHandler = (submission:any) => {
    setResult(submission);
    setSubmitted(true);
  }

  return (
    <>
      <div>
        {/* <Form src="https://formio.ostaadx.ai/postnachsendeauftrag" onSubmit={onSubmitHandler} submission={loadData} /> */}
        <Form src="https://formio.ostaadx.ai/postnachsendeauftrag" onSubmit={onSubmitHandler} submission={loadData} />
      </div>
    </>
  );
};

export default Submission;
