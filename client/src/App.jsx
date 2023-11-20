import { useState, useEffect } from "react";
import shareState, { StateProvider } from "./state/StateContext";
import axios from "axios";
import "./App.css";

import Container from "./components/Container.jsx";

function App() {


  return (
    <StateProvider>
      <div className="app_container">

      <Container></Container>
      </div>
    </StateProvider>
  );
}

export default App;
