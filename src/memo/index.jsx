import React, { useState } from 'react';
import AB from './AB';

const MemoUse = () => {
  const [count, setCount] = useState(100);
  return (
    <div>
      <p>Using Memo</p>
      <AB />
      <button type='button' onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  );
};

export default MemoUse;
