import { useEffect, useState } from "react";

interface DataEndpoint<T> {
  data: T | null;
  isLoading: boolean;
  hasError: boolean;
  error: {
    code?: number;
    message?: string;
  };
}

const localCache = {};


export const useFetch = <T>(url: string) => {
  const [state, setState] = useState<DataEndpoint<T>>({
    data: null,
    isLoading: true,
    hasError: false,
    error: {},
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: {},
    });
  };

  const getFetch = async () => {
    if (localCache[url]) {
      console.log("usando cache");
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: {},
      });
      return;
    }

    setLoadingState();
    const resp = await fetch(url);

    // !Sleep
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }
    const data: T = await resp.json();
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: {},
    });

    // TODO Manejo del cache
    localCache[url] = data;
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    error: state.error,
  };
};
