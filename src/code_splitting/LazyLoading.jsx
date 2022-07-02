import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorBoundary';

const ReactDummySkeleton = React.lazy(() => import('../react-loading-skeleton/index'));

/**
 * for more reference watch this Video and Blog ,,link is given below.

  *  https://www.youtube.com/watch?v=IBrmsyy9R94 => Video
  *  https://kentcdodds.com/blog/use-react-error-boundary-to-handle-errors-in-react => Blog
 */

const LazyLoading = () => {
  return (
    <div>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <Suspense fallback={<p>Loading...</p>}>
          <ReactDummySkeleton />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default LazyLoading;
