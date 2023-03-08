import React from 'react';

type Props = {
  count: number;
};

function LoadingSkeleton({ count = 1 }: Props) {
  return (
    <>
      {new Array(count).fill(null).map((__, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className="max-h-max rounded-lg animate-pulse flex flex-col bg-gray-50"
        >
          <div className="px-4">
            <div className="bg-gray-200 h-40 w-full" />
          </div>
          <div className="space-y-2 p-4">
            <div className="h-4 bg-gray-200 rounded w-2/5" />
            <div className="h-4 bg-gray-200 rounded w-3/5" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
        </div>
      ))}
    </>
  );
}

export default LoadingSkeleton;
