import reducer from "./reducers";
import * as actions from "./actions";

const initialState = {
  popularMovies: [],
  popularSeries: [],
};

export { reducer, initialState, actions };
