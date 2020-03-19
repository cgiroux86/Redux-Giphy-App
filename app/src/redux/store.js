import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { giphyReducer } from "./reducers/giphyReducer";

export const store = createStore(
  giphyReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
