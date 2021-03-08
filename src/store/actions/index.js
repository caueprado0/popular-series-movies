import api from "src/services/api";

export const getMaterateList = async (dispatch) => {
  try {
    const res = await api.get(
      "/api/homescreen_2?filters[type]=single_4&filters%5Blocation%5D%5Bradius%5D=40"
    );
    const payloadMaterate = res?.data ?? [];

    const popularMovies = payloadMaterate.find(
      (materate) => materate.key === "popular_1"
    );

    const popularSeries = payloadMaterate.find(
      (materate) => materate.key === "popular_2"
    );

    dispatch({ type: "GET_MOVIES_DONE", payload: popularMovies.entities });
    dispatch({ type: "GET_SERIES_DONE", payload: popularSeries.entities });
  } catch (err) {
    console.error(err);
  }
};

export const getDetails = async (id) => {
  try {
    const res = await api.get(`/api/movie/show/${id}`);
    const payload = res?.data ?? {};

    return payload.movie || {};
  } catch (err) {
    console.error(err);
  }
};
