import React, { useState } from 'react';

const HOC = (WrappedComponents, number) => {
  return (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + number);
    };

    return (
      <div>
        <WrappedComponents count={count} increment={increment} {...props} />
      </div>
    );
  };
};

export default HOC;
