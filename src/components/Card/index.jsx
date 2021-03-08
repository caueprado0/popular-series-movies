import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import moment from "moment";

import { getDetails } from "src/store/actions";

import {
  CardFront,
  CardBack,
  CardTitle,
  CardHeader,
  CardSubtitle,
  Year,
  Genres,
  Overview,
} from "./styles";

export default function CardComponent(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { year = moment().year() } = props;

  const [movieDetail, setMovieDetail] = useState({});
  const { id } = props;
  useEffect(() => {
    getDetails(id).then((detail) => {
      setMovieDetail(detail);
    });
  }, [id]);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <CardFront
        className="card d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${props.cover})`,
        }}
        onMouseEnter={() => setIsFlipped(true)}
      >
        <CardTitle>{props.title}</CardTitle>
      </CardFront>
      <CardBack
        className="card d-flex align-items-center text-center flex-column"
        onMouseLeave={() => setIsFlipped(false)}
      >
        <CardHeader>
          <CardSubtitle>{props.title} </CardSubtitle>
          <Year>({String(year)})</Year>
        </CardHeader>
        <Genres>
          {props.genres.map((genre) => (
            <span>{`${genre} `}</span>
          ))}
        </Genres>
        <div className="mt-3 mb-2">
          <Overview>{movieDetail?.overview}</Overview>
        </div>
      </CardBack>
    </ReactCardFlip>
  );
}
