import React, { useMemo, useState } from 'react';

const UseMemo = () => {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(100);

  const isEven = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return data % 2 === 0;
  }, [data]);
  return (
    <div>
      <p>useMemo</p>
      <button type='button' onClick={() => setData(data + 1)}>
        {data}
        {isEven ? 'Even' : 'Odd'}
      </button>{' '}
      <br />
      <button type='button' onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  );
};

export default UseMemo;
