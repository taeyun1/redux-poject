import { ADD_VIEW } from "./types";

const addView = (number) => {
  return {
    type: ADD_VIEW,
    payload: Number(number),
  };
};

export { addView };
