import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./reducers";

const middleware = [thunk];
const initialStage = {};

const store = createStore(
  rootReducer,
  initialStage,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
