import { useState, useEffect } from "react";

export const useFetch = (uri: string) => {
  const [customerData, setCustomerData] = useState<null>(null);
  const [error, setError] = useState<Error | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uri) return;
    const fetchData = async () => {
      try {
      const res = await fetch(uri);
      const json = await res.json();

      if (json) {
        setCustomerData(json);
        setLoading(false);
      }
    } catch (error: any) {
      setError(error);
    }
  };

    fetchData();
  }, [uri]);

  return{ loading, customerData, error };
}