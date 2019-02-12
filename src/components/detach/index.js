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
      <>
        <Container detached={focusMode}>
          {focusMode && (
            <ButtonWrapper>
              <Button onClick={this.closeDetach}>Back</Button>
            </ButtonWrapper>
          )}
          <div onClick={this.openDetach}>{this.props.children}</div>
        </Container>
        {focusMode && <Overlay />}
        {/* we render an overlay so the card looks isolated */}
      </>
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
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 10;
      /* we can target other styled components ond override their style */
      ${JokeCardStyle} {
        max-width: 300px;
        cursor: auto;
        box-shadow: 5px 5px 12px 4px #403e3e;
        border: none;
      }
    `}
`;

const Overlay = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #242222bd;
  z-index: 9;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-start;
  width: 300px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 3.14px;
  padding: 4px 9px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: #d5752a;
`;
