import { combineReducers } from "redux";
import pageReducer from "./page";
import userReducer from "./user";

const rootReducer = combineReducers({
  user: userReducer,
  page: pageReducer,
});

export default rootReducer;
