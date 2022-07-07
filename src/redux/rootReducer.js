import { combineReducers } from "redux";
import subscribersReducer from "./subscribers/reducer";
import viewsReducer from "./views/reducer";
import commentsReducer from "./comments/reducer";

// combineReducers를 쓰면 state구조가 약간 바뀌기 때문에 확인하고, 바이딩해야함
const rootReducer = combineReducers({
  subscribers: subscribersReducer,
  views: viewsReducer,
  comments: commentsReducer,
});

export default rootReducer;
