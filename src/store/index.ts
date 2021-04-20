import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

const middlewares: Array<any> = [thunk];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);
export default store;
