import React, { useState } from 'react';

const HOC = (WrappedComponents, number) => {
  return (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + number);
    };

    return <WrappedComponents count={count} increment={increment} {...props} />;
  };
};

export default HOC;
