import React, { useEffect } from 'react';

const getLocalStorageData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const useLocalStorage = (key, value) => {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  const op = getLocalStorageData(key);
  console.log(op);
  return <div>useLocalStorage</div>;
};

export default useLocalStorage;
