import React, { memo } from 'react';

const Child = () => {
  console.log('react-memo');
  return <div></div>;
};

export default memo(Child);
