import { combineReducers, createStore } from "redux";
import { mainReducer } from "./mainReducer";
import { todayReducer } from "./todayReducer";

const rootReducer = combineReducers({ main: mainReducer, today: todayReducer });

export const store = createStore(rootReducer);
