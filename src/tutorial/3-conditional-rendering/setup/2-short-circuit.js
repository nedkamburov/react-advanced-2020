import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)

  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (<>
    {/* <h1>{firstValue}</h1>
    <h3>value: {secondValue}</h3>
     */}
    {/* <h1>{text || 'user'}</h1> */}
    {/* {!text && <h1>hello world</h1>} */}
    {/* {text && <h1>hello world</h1>} */}
    <h1>{text || 'user'}</h1>
    <button className="btn" onClick={() => setIsError(!isError)}>Toggle Error</button>
    {isError && <h1>Error...</h1>}
    {isError ? <p>There is an error.</p> : <div><p>No errors.</p></div>}
  </>)
};

export default ShortCircuit;
