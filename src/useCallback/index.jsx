import React, { useState, useCallback } from 'react';
import Child from './Child';

const UseCallback = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const getFunc = useCallback(() => {
    console.log([countTwo + 1, countTwo - 1]);

    return [countTwo + 1, countTwo - 1];
  }, [countTwo]);

  return (
    <div>
      <button type='submit' onClick={() => setCountOne((prev) => prev + 1)}>
        CountOne : {countOne}
      </button>
      <button type='submit' onClick={() => setCountTwo((prev) => prev + 1)}>
        CountTwo : {countTwo}
      </button>
      <div>
        <Child getFunc={getFunc} />
      </div>
    </div>
  );
};

export default UseCallback;
