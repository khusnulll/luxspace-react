import { useState, useCallback } from "react";

const defultState = {
  data: null,
  status: "idle",
  error: null,
};
const useAsync = (initialState) => {
  const [{ data, status, error }, setState] = useState({ ...defultState, ...initialState });

  const run = useCallback(
    (promise) => {
      if (!promise || promise.then) throw new Error("the argument passed to useAsync().run must be a promise");
      setState({ status: "pending" });
      return promise.then(
        (data) => {
          setState({ data, status: "resolved" });

          return data;
        },
        (error) => {
          console.log(error.message);
          setState({ status: "rejected", error: JSON.parse(error.message) });
        }
      );
    },
    [setState]
  );

  return { data, status, error, run };
};

export default useAsync;
