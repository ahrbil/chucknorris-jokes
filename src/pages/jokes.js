import React from "react";
import styled from "styled-components";

import { getJokes } from "../lib";
import cnGif from "../assets/chucknorris.gif";
import JokeCard from "../components/card";
import { LoadingGif, Center } from "../components/style";
import InfiniteScroll from "../components/infinite-scroll";

class Jokes extends React.Component {
  state = {
    jokes: [],
    category: "",
    loading: false,
    parPage: 10
  };

  // set loading to true if it is not
  setLoading = () => {
    const { loading } = this.state;
    if (loading) {
      return;
    }
    this.setState({ loading: true });
  };

  //a function that is responsible for loading jokes from the api
  loadJokes = async () => {
    const { jokes, category, parPage } = this.state;
    // if we want to filter by categories we can pass it here
    const res = getJokes(parPage, category);
    // wait for all promises to resolve
    const newJokes = await Promise.all(res).catch(err => console.log(err));
    // add new jokes to the existed ones
    this.setState({ loading: false, jokes: [...jokes, ...newJokes] });
  };

  render() {
    const { jokes, loading } = this.state;
    // this is like if we don't have more results to fetch
    const hasMore = !(jokes.length === 10);
    return (
      // a component tha calls loadJokes function when we reach a scrolling position
      <InfiniteScroll
        loadMore={this.loadJokes}
        setLoading={this.setLoading}
        loading={loading}
        hasMore={hasMore}
      >
        <JokesListStyle>
          {/* if we have jokes we map over them and display then in card */}
          {jokes &&
            jokes.map(joke => <JokeCard key={joke.id} joke={joke.value} />)}
          {/* if loading display a loading indicator */}
          {loading && (
            <LoadingGif>
              <img src={cnGif} alt="chucknorris dancing" />
            </LoadingGif>
          )}
          {/* if we dont have any more results show this message at the end */}
          {!hasMore && (
            <Center>
              <p>no more jokes to load.</p>
            </Center>
          )}
        </JokesListStyle>
      </InfiniteScroll>
    );
  }
}

export default Jokes;
// a styled components div
const JokesListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 16px;
`;
