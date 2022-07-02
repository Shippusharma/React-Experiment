import React, { useState } from 'react';
import Child from './Child';

const MemoUse = () => {
  const [count, setCount] = useState(100);
  return (
    <div>
      <p> Memo | Pure Component</p>
      <Child />
      <button type='button' onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  );
};

export default MemoUse;
