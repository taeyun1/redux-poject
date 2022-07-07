import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import subscribersReducer from "./subscribers/reducer";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"; // action에서 dispatch를 리턴해줄수 있는 기능을 사용할수있음

// actions -> actions.js에 작성
// reducer -> reducer.js에 작성

const middleware = [logger, thunk];

// store생성
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
