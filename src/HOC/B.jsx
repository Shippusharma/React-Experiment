import React from 'react';
import HOC from './HOC';

const B = ({ count, increment, name }) => {
  return (
    <button type='button' onMouseOver={increment}>
      {name} MouseOver {count}
    </button>
  );
};

export default HOC(B, 1); //number = 1
