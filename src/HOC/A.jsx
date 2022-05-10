import React from 'react';
import HOC from './HOC';

const A = ({ count, increment, name }) => {
  return (
    <button type='button' onClick={increment}>
      {name} Click {count}
    </button>
  );
};

export default HOC(A, 5); //number = 5
