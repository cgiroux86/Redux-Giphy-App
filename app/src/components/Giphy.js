import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, fetchData } from "../redux/actions/giphyActions";

const Giphy = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log(state);

  return (
    <div>
      <h1>Giphy Search</h1>
      <form>
        <label htmlFor="giphy">Search Giphy</label>
        <input
          onChange={e => dispatch(setQuery(e.target.value))}
          type="text"
          id="giphy"
        ></input>
        <button
          onClick={e => {
            e.preventDefault();
            dispatch(fetchData(state.query));
          }}
        >
          Search Giphy
        </button>
      </form>
      <div
        className={
          state.error.length
            ? "error"
            : state.data.length > 0
            ? "container"
            : null
        }
      >
        {state.loading ? (
          <p className="loading">>>>>LOADING>>>></p>
        ) : state.error.length ? (
          <div className="error">{state.error}</div>
        ) : state.data.length ? (
          state.data.map(elem => {
            return (
              <video
                className="video"
                autoPlay
                loop
                key={elem.id}
                src={elem.images.preview.mp4}
              />
            );
          })
        ) : (
          <p>Enter search to see Gif's!!!</p>
        )}
      </div>
    </div>
  );
};

export default Giphy;
