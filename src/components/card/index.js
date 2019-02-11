import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Detach from "../detach";

// we wrap our joke card in a Detach component
// so we can render it differently when we click it
// when we click any card we will render it alone on screen
// and when we click on the overlay we go back to our feed
const JokeCard = ({ joke }) => (
  <Detach>
    <JokeCardStyle>
      <p>{joke}</p>
    </JokeCardStyle>
  </Detach>
);

export default JokeCard;
JokeCard.propTypes = {
  joke: PropTypes.string.isRequired
};

export const JokeCardStyle = styled.div`
  margin-bottom: 1.4rem;
  box-shadow: 1px 1px 1px 0px #d2d2d2;
  border: 1px solid #d2d2d2;
  padding: 0.7rem;
  border-radius: 4.71px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  background-color: white;
  p {
    word-break: break-word;
    line-height: 1.4;
  }
`;
