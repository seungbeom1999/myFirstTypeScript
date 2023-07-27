import { useState, useCallback, Dispatch, SetStateAction } from "react";
import { eventChange } from "../model/DataBase";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: string | eventChange) => {
    if (typeof e === "string") {
      setValue(initialValue);
    } else {
      setValue(e.target.value);
    }
  }, []);
  return [value, handler, setValue] as const;
};

export default useInput;
