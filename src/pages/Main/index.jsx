import React, { useReducer, useEffect } from "react";

import { initialState, reducer, actions } from "src/store";
import Header from "src/components/Header";
import Card from "src/components/Card";

export default function Main() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    actions.getMaterateList(dispatch);
  }, [dispatch]);

  const { popularMovies = [], popularSeries = [] } = state;

  const renderCard = (card) => {
    return (
      <div className="col-md-4">
        <Card {...card} />
      </div>
    );
  };

  return (
    <div className="container-fluid p-0">
      <div className="container">
        <div className="mb-2">
          <Header>Filmes</Header>
          <main className="row">{popularMovies.map(renderCard)}</main>
        </div>

        <div className="mt-2">
          <Header>Séries</Header>
          <main className="row">
            {popularSeries.map((serie) => renderCard(serie))}
          </main>
        </div>
      </div>
    </div>
  );
}
