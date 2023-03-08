import { useQueryClient } from 'react-query';
import { QueryClient } from 'react-query/core';

type Value = {
  client: QueryClient;
  clear: () => void;
};

function useCache(): Value {
  const queryClient = useQueryClient();

  return {
    client: queryClient,
    clear: () => {
      queryClient.clear();
    },
  };
}

export default useCache;
