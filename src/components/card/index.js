import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const JokeCard = ({ joke }) => (
  <JokeCardStyle>
    <p>{joke}</p>
  </JokeCardStyle>
);

export default JokeCard;
JokeCard.propTypes = {
  joke: PropTypes.string.isRequired
};

const JokeCardStyle = styled.div`
  margin-bottom: 1.4rem;
  box-shadow: 1px 1px 1px 0px #d2d2d2;
  border: 1px solid #d2d2d2;
  padding: 0.7rem;
  border-radius: 4.71px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  p {
    word-break: break-word;
    line-height: 1.4;
  }
`;
