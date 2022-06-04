import React, { memo } from 'react';

const AB = () => {
  console.log('react-memo');
  return <div></div>;
};

export default memo(AB);
