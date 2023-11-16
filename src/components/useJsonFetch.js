import {useState,useEffect} from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(url+opts)
      .then((response) => response.ok ? response : new Error(response.statusText))
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => setError('Exit with error  ' + err))
      .then(() => setLoading(false));
    }, []);
  
  return [data, error, loading];
}
