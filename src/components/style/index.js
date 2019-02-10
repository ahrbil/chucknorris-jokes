import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
`;
export const LoadingGif = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 40px;
    height: 40px;
  }
`;
