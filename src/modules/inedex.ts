import { combineReducers } from "redux";
import Reducer from "./reducer";

const rootReducer = combineReducers({
  Reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
