import { useState, useEffect } from "react";

export const useFetch = (uri: string) => {
  const [data, setData] = useState<null | Response>(null);
  const [error, setError] = useState<Error | null>();

  useEffect(() => {
    if (!uri) return;
    const fetchData = async () => {
      try {
      const res = await fetch(uri);
      const json = await res.json();

      setData(json);
    } catch (error: any) {
      setError(error);
    }
  };

    fetchData();
  }, [uri]);

  return{ data, error };
}