import React from "react";

import Header from "src/components/Header";
import Card from "src/components/Card";

export default function Main() {
  return (
    <div className="container-fluid p-0">
      <div className="container">
        <Header>Filmes</Header>

        <main className="row">
          <div className="col-md-4">
            <Card
              cover="https://static.materate.com/1471486/conversions/card_cover.jpg"
              title="Eu Me Importo"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
