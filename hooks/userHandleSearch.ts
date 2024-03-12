// hooks/useHandleSearch.ts
import { useRouter } from 'next/router';

const useHandleSearch = (router: ReturnType<typeof useRouter>) => {
  const handleSearch = async (query: string) => {
    // Handle search logic
    await router.push(`/query?q=${encodeURIComponent(query)}`);
  };

  return handleSearch;
};

export default useHandleSearch;