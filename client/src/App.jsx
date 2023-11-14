import { useState, useEffect } from "react";
import shareState, { StateProvider } from "./state/StateContext";
import axios from "axios";
import "./App.css";

import Container from "./components/Container.jsx";

function App() {
  const { dreams, user } = shareState();

  console.log(dreams.length);
  console.log(user);

  return (
    <StateProvider>
      <Container></Container>
    </StateProvider>
  );
}

export default App;
