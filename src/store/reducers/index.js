export default function reducer(state, { type, payload }) {
  switch (type) {
    case "GET_MOVIES_DONE":
      return { ...state, popularMovies: payload };
    case "GET_SERIES_DONE":
      return { ...state, popularSeries: payload };
    default:
      return state;
  }
}
