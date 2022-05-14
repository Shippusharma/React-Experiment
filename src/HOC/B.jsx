import React from 'react';
import HOC from './HOC';

const B = ({ count, increment, name }) => {
  return (
    <div>
      <button type='button' onMouseOver={increment}>
        {name} MouseOver {count}
      </button>{' '}
    </div>
  );
};

export default HOC(B, 1); //number = 1
