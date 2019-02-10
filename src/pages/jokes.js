import React from "react";
import styled from "styled-components";

import { getJokes } from "../lib";
import cnGif from "../assets/chucknorris.gif";
import JokeCard from "../components/card";
import { LoadingGif } from "../components/style";

class Jokes extends React.Component {
  state = {
    jokes: [],
    category: "",
    loading: true
  };

  componentDidMount = async () => {
    const res = getJokes();
    const jokes = await Promise.all(res).catch(err => console.log(err));
    this.setState({ jokes, loading: false });
  };
  render() {
    const { loading, jokes } = this.state;
    return (
      <JokesListStyle>
        {jokes &&
          !loading &&
          jokes.map(joke => <JokeCard key={joke.id} joke={joke.value} />)}
        {loading && (
          <LoadingGif>
            <img src={cnGif} alt="chucknorris dancing" />
          </LoadingGif>
        )}
      </JokesListStyle>
    );
  }
}

export default Jokes;

const JokesListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 16px;
`;
