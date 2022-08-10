import { combineReducers } from "redux";
import greetingReducer from "./greeting";
import iceBreakerReducer from "./ice-breaker";
import pageReducer from "./page";
import persistentMenuReducer from "./persistent-menu";
import userReducer from "./user";

const rootReducer = combineReducers({
  user: userReducer,
  page: pageReducer,
  greeting: greetingReducer,
  menu: persistentMenuReducer,
  iceBreaker: iceBreakerReducer,
});

export default rootReducer;
