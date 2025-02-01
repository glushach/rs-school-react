import { useState, useEffect } from 'react';

const useSearchQuery = () => {
  const [searchStr, setSearchStr] = useState(
    localStorage.getItem('searchStr') || ''
  );

  useEffect(() => {
    localStorage.setItem('searchStr', searchStr);
  }, [searchStr]);

  return [searchStr, setSearchStr] as const;
};

export default useSearchQuery;
