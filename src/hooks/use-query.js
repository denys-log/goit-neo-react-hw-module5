import { useState, useEffect } from 'react';
import { fetchApi } from '../services/api';

export default function useQuery(url, { enabled = true } = {}) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(enabled);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (enabled) {
      fetchApi(url)
        .then(data => {
          setData(data);
          setIsError(false);
        })
        .catch(() => {
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [enabled, url]);

  return { data, isLoading, isError };
}
