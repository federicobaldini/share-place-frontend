import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortController = new AbortController();
      activeHttpRequests.current.push(httpAbortController);

      try {
        const response = await fetch(url, {
          method: method,
          body: body,
          headers: headers,
          signal: httpAbortController.signal,
        });

        const data = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (r) => r !== httpAbortController
        );

        if (!response.ok) {
          throw new Error(data.message);
        }

        setIsLoading(false);
        return data;
      } catch (err) {
        setError(err.message || "Something went wrong, please try again.");
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortController) =>
        abortController.abort()
      );
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
