import React, {
  FunctionComponent,
  LazyExoticComponent,
  ReactElement,
  Suspense,
} from 'react';
import Spinner from 'components/Spinner';

export function lazyLoadComponent(Component: LazyExoticComponent<FunctionComponent>):
  ReactElement {
  return (
    <Suspense
      fallback={<Spinner />}
    >
      <Component />
    </Suspense>
  );
}
