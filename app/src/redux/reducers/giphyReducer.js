import {
  GET_DATA,
  SET_DATA,
  SET_ERROR,
  SET_QUERY
} from "../actions/giphyActions";

export const initialState = {
  loading: false,
  query: "",
  data: [],
  error: ""
};

export const giphyReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.payload
      };
    case GET_DATA:
      return {
        ...state,
        loading: true,
        query: "",
        error: ""
      };
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
