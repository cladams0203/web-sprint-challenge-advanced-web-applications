import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    response: "",
    error: "",
    loading: false,
  });
  useEffect(() => {
    const fetching = async () => {
      setState({ ...state, loading: true });
      try {
        const res = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
          },
        });
        setState({ ...state, loading: false, response: res.json() });
      } catch (e) {
        setState({ ...state, loading: false, error: e.message });
      }
    };
    fetching();
  }, []);
  return [state.response, state.error, state.loading];
};
