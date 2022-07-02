import React, { useState, useEffect } from 'react';

const Child = ({ getFunc }) => {
  const [getItem, setGetItem] = useState([]);

  useEffect(() => {
    setGetItem(getFunc());
  }, [getFunc]);

  return <div>{getItem}</div>;
};

export default Child;
