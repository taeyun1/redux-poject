import { ADD_VIEW } from "./types";

const initialState = {
  viewCount: 0,
};

const viewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VIEW:
      return {
        ...state,
        viewCount: state.viewCount + action.payload,
      };
    default:
      return state;
  }
};

export default viewsReducer;
