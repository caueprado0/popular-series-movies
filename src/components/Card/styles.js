import styled from "styled-components";

const Card = styled.div`
  min-width: 294px;
  width: 294px;

  height: 400px;
  min-height: 400px;

  perspective: 1000px;
  margin: 1rem;
  position: relative;

  cursor: pointer;
  padding: 2rem;
  font-size: 1.62rem;
  font-weight: 600;

  overflow: hidden;
  font-family: Poppins, sans-serif;

  border-radius: 6px;
  background-repeat: no-repeat;
  backface-visibility: hidden;
  background-position-x: 50%;
  background-position-y: 50%;
  background-size: cover;

  transform-style: preserve-3d;
  transition: ease-in-out 600ms;

  @media (max-width: 800px) {
    .card {
      width: calc(50% - 2rem);
    }
  }
  @media (max-width: 500px) {
    .card {
      width: 100%;
    }
  }
`;

export const CardFront = styled(Card)`
  color: rgba(255, 255, 255, 0.8);

  &:before {
    position: absolute;
    display: block;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #1a9be6, #1a57e6);
    opacity: 0.25;
    z-index: -1;
  }
`;

export const CardBack = styled(Card)`
  color: #333;
  background-color: #fff;
  font-family: "Nunito Sans", sans-serif;
  padding: 20px 30px;
`;

export const CardTitle = styled.h2`
  font-family: Poppins, sans-serif;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
`;

export const CardHeader = styled.div`
  line-height: 27px;
  text-align: center;
`;

export const CardSubtitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  display: inline;
`;

export const Year = styled.span`
  font-weight: 400;
  font-size: 18px;
`;

export const Genres = styled.div`
  font-size: 12.5px;
  font-weight: 300;
`;

export const Overview = styled.p`
  font-size: 12.5px;
  font-weight: 300;

  text-align: left;
  text-overflow: ellipsis;
`;
