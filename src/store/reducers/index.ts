import {combineReducers} from 'redux';
import catalogReducer from "./catalog";
import basketReducer from "./basket";

const rootReducer = combineReducers({
  catalogState: catalogReducer,
  basketState: basketReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
