import React, { useLayoutEffect, useEffect, useRef } from 'react';

const Layout = () => {
  const ref = useRef('red');

  useEffect(() => {
    ref.current = 'yellow';
    console.log(ref, 'useEffect');
  });

  useLayoutEffect(() => {
    console.log(ref, 'useLayoutEffect');
  });

  return <div></div>;
};

export default Layout;
