import { QueryClient } from 'react-query';
import { DEFAULT_CACHE_TIME } from 'utils/constants';

const queryClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: DEFAULT_CACHE_TIME,
    },
    mutations: {
      retry: false,
    },
  },
});

export { queryClient };
