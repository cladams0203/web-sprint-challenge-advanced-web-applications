import { useState, useEffect } from "react";
import { api } from "./api";

export const useFetch = (url) => {
  const [state, setState] = useState({
    response: "",
    error: "",
    loading: false,
  });
  useEffect(() => {
    setState({ ...state, loading: true });
    api()
      .get(url)
      .then((res) => {
        setState({ ...state, response: res, loading: false });
      })
      .catch((err) => {
        setState({ ...state, loading: false, error: err.message });
      });
  }, []);

  // useEffect(() => {
  //   const fetching = async () => {
  //     setState({ ...state, loading: true });
  //     try {
  //       const res = await fetch(url, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `${localStorage.getItem("token")}`,
  //         },
  //       });
  //       setState({ ...state, loading: false, response: res.json() });
  //     } catch (e) {
  //       setState({ ...state, loading: false, error: e.message });
  //     }
  //   };
  //   fetching();
  // }, []);
  return [state.response, state.error, state.loading];
};
