import { useState, useEffect } from "react";
import shareState, { StateProvider } from "./state/StateContext";
import axios from "axios";
import "./App.css";

import Container from "./components/Container.jsx";

function App() {


  return (
    <StateProvider>
      <Container></Container>
    </StateProvider>
  );
}

export default App;
