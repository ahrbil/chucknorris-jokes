import React from "react";

import "./App.css";
import Jokes from "./pages/jokes";
import { Container } from "./components/style";
import Header from "./components/header";

const App = () => (
  <>
    <Header />
    <Container>
      <Jokes />
    </Container>
  </>
);

export default App;
