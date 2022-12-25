import { combineReducers } from "redux";
import contactReducer from "./contact";
import greetingReducer from "./greeting";
import iceBreakerReducer from "./ice-breaker";
import pageReducer from "./page";
import persistentMenuReducer from "./persistent-menu";
import planReducer from "./plan";
import mentionReducer from "./story-mention";
import replyReducer from "./story-reply";
import userReducer from "./user";

const rootReducer = combineReducers({
  user: userReducer,
  page: pageReducer,
  greeting: greetingReducer,
  menu: persistentMenuReducer,
  iceBreaker: iceBreakerReducer,
  contact: contactReducer,
  mention: mentionReducer,
  reply: replyReducer,
  plan: planReducer,
});

export default rootReducer;
