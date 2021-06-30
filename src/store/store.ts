import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reduxThunk from "redux-thunk";
import { rootReducer } from "./rootReducer";

const midlware = [reduxThunk];

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...midlware))
);
