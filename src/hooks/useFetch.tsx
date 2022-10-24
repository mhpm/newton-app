import { useEffect, useState } from 'react';

enum TypeRequest {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  delete = 'DELETE',
}

const useFetch = (
  url: string,
  options: RequestInit = {
    method: TypeRequest.get,
    headers: {
      'Content-Type': 'application/json',
    },
  }
) => {
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response: any = await fetch(url, options ? options : {});

        if (!response.ok) {
          throw new Error(response.status);
        }

        const json = await response.json();
        setData(json);
        setIsLoading(false);
      } catch (err: any) {
        setIsLoading(false);
        setError('Error code: ' + err.message);
      }
    };

    fetchData();
  }, [url]);

  return { error, isLoading, data };
};

export default useFetch;
