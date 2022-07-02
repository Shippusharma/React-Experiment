import React, { useRef } from 'react';

const RefTest = () => {
  const input_ref = useRef();

  const handleRef = () => {
    input_ref.current.focus();
    input_ref.current.style = 'background-color:pink';
    // input_ref.current.value = 'using useRef - Hello World!';

    console.log('<<useRef>>>', input_ref.current.value);
  };
  return (
    <div>
      <p>useRef</p>
      <input type='text' ref={input_ref} />
      <button onClick={handleRef}>submit</button>
    </div>
  );
};

export default RefTest;
