import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const NewSkeleton = () => {
  return (
    <SkeletonTheme baseColor='#202020' highlightColor='#444'>
      <p>
        <Skeleton count={5} />
      </p>
    </SkeletonTheme>
  );
};

const ReactSkeleton = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <>
      <h4>ReactSkeleton</h4>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {arr?.slice(0, 4)?.map((_, i) => {
          return (
            <div
              key={i}
              style={{
                margin: '10px',
                width: '300px',
              }}
            >
              {<NewSkeleton />}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReactSkeleton;
