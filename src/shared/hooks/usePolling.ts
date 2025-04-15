import { useState, useEffect, useRef } from "react";

interface PollingOptions<T> {
  url: string;
  interval?: number;
  initialData?: T;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  enabled?: boolean;
}

export function usePolling<T>({
  url,
  interval = 1000,
  initialData,
  onSuccess,
  onError,
  enabled = true,
}: PollingOptions<T>) {
  const [data, setData] = useState<T | undefined>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [shouldPoll, setShouldPoll] = useState<boolean>(enabled);
  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  const fetchData = async () => {
    if (!shouldPoll) return;

    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      setError(null);
      if (onSuccess) onSuccess(result);
    } catch (err) {
      setError(err as Error);
      if (onError) {
        onError(err as Error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!shouldPoll) {
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
        pollingRef.current = null;
      }
      return;
    }

    fetchData();

    pollingRef.current = setInterval(fetchData, interval);

    return () => {
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
        pollingRef.current = null;
      }
    };
  }, [url, interval, shouldPoll]);

  return { data, isLoading, error, setShouldPoll };
}
