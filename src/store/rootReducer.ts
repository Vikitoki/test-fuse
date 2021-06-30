import { combineReducers } from "redux";
import { accomodationReducer } from "./accommodation/reduce";

export const rootReducer = combineReducers({
  accomodation: accomodationReducer,
});
