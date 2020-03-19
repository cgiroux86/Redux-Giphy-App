export const GET_DATA = "GET_DATA";
export const SET_DATA = "SET_DATA";
export const SET_ERROR = "SET_ERROR";
export const SET_QUERY = "SET_QUERY";

export const setQuery = input => {
  return {
    type: SET_QUERY,
    payload: input
  };
};

export const getData = input => {
  return {
    type: GET_DATA,
    payload: input
  };
};

export const setData = input => {
  return {
    type: SET_DATA,
    payload: input
  };
};

export const setError = error => {
  return {
    type: SET_ERROR,
    payload: error
  };
};

export const fetchData = input => dispatch => {
  dispatch(getData());
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=He2sYILYVodhCTWWcwzYnn62iKIbv9Gg&q=${input}&limit=15&offset=0&rating=G&lang=en`
  )
    .then(res => {
      console.log(res);
      if (!res.ok) {
        console.log(res, "&&&&");
        dispatch(setError(res.status.toString()));
      } else {
        return res.json();
      }
    })
    .then(data =>
      data === undefined
        ? null
        : data.data.length === 0
        ? dispatch(setError("No Results Found"))
        : dispatch(setData(data.data))
    );
};
