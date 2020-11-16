import { useState } from "react";

export const useFetch = (url) => {
  const fetchData = async () => {
    try {
      const api = fetch(url, options);
      const res = JSON.parse(api);
    } catch (error) {
      console.log(error);
    }
  };
  return [res, fetchData];
};
