import React, { useState, useEffect } from 'react';
import useCustomHook from './useCustomHook';

const CustomHook = () => {
  const [name, setName] = useState('');

  useCustomHook(name);

  return (
    <div>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      {name}
    </div>
  );
};

export default CustomHook;
