import { combineReducers } from "redux";
import greetingReducer from "./greeting";
import pageReducer from "./page";
import userReducer from "./user";

const rootReducer = combineReducers({
  user: userReducer,
  page: pageReducer,
  greeting: greetingReducer,
});

export default rootReducer;
