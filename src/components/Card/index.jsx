import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import moment from "moment";
import {
  CardFront,
  CardBack,
  CardTitle,
  CardHeader,
  CardSubtitle,
  Year,
  Genres,
} from "./styles";

export default function CardComponent(props) {
  const [isFlipped, setIsFlipped] = useState(true);
  const { year = moment().year() } = props;

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
      </CardBack>
    </ReactCardFlip>
  );
}
