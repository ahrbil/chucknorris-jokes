import React from "react";
import styled, { css } from "styled-components";
import { JokeCardStyle } from "../card";

class Detach extends React.Component {
  state = {
    focusMode: false
  };

  openDetach = () => {
    this.setState({ focusMode: true });
  };

  closeDetach = () => {
    this.setState({ focusMode: false });
  };

  render() {
    const { focusMode } = this.state;
    return (
      <Container onClick={this.openDetach} detached={focusMode}>
        {this.props.children}
        {/* we render an overlay so the card looks isolated */}
        {focusMode && <Overlay onClick={focusMode && this.closeDetach} />}
      </Container>
    );
  }
}
export default Detach;

const Container = styled.div`
  ${props =>
    props.detached &&
    css`
      position: fixed;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      /* we can target other styled components ond override their style */
      ${JokeCardStyle} {
        max-width: 300px;
        z-index: 10;
        cursor: auto;
      }
    `}
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #e5e5e5;
  opacity: 0.8;
  z-index: 9;
`;
