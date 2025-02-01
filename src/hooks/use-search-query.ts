import { useState, useEffect } from 'react';

const useSearchQuery = () => {
  const [searchStr, setSearchStr] = useState(() => {
    return (localStorage.getItem('searchStr') || '').trim();
  });

  useEffect(() => {
    localStorage.setItem('searchStr', searchStr);
  }, [searchStr]);

  return [searchStr, setSearchStr] as const;
};

export default useSearchQuery;
