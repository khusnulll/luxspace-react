import { useCallback, useReducer, useRef } from "react";

import useSafeDispatch from "./useSafeDispatch";

const defultState = {
  data: null,
  status: "idle",
  error: null,
};

export const useAsync = (initialState) => {
  const initialStateRef = useRef({ ...defultState, initialState });
  const [{ data, status, error }, setState] = useReducer((state, action) => {
    return { ...state, ...action };
  }, initialStateRef.current);

  const safeSetState = useSafeDispatch(setState);

  const run = useCallback(
    (promise) => {
      if (!promise || typeof promise.then !== "function") throw new Error("the argument passed to useAsync().run must be a promise");
      safeSetState({ status: "pending" });
      return promise.then(
        (data) => {
          safeSetState({ data, status: "resolved" });

          return data;
        },
        (error) => {
          console.log(error.message);
          safeSetState({ status: "rejected", error: JSON.parse(error.message) });
        }
      );
    },
    [safeSetState]
  );
  const setData = useCallback(
    (data) => {
      safeSetState({ data });
    },
    [safeSetState]
  );

  const setError = useCallback(
    (error) => {
      safeSetState({ error });
    },
    [safeSetState]
  );

  const reset = useCallback(() => {
    safeSetState(initialStateRef.current);
  }, [safeSetState]);

  return { data, status, error, run, setData, setError, reset, isIdle: status === "idle", isLoading: status === "idle" || status === "pending", isError: status === "rejected", isSucces: status === "resolved" };
};
