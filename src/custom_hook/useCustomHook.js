import React, { useEffect, useDebugValue } from 'react';

const useCustomHook = (name) => {
  useDebugValue(name);

  /**
   *! useDebugValue can be used to display a label for custom hooks in React DevTools.
   *! this hook is use only for debugging
   */

  useEffect(() => {
    console.log('Custom-Hook >>>', name);
  }, [name]);
};

export default useCustomHook;
