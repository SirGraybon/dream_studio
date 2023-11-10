import { useState, useEffect } from "react";
import shareState, { StateProvider } from "./state/StateContext";
import axios from "axios";
import "./App.css";
import DreamList from "./components/DreamList.jsx";
import Login from "./components/Login.jsx";

function App() {
  const { dreams, user } = shareState();
  // const [dreams, setDreams] = useState([]);
  // const [show, setShow] = useState(false);
  // const [dream, setDream] = useState({});
  // const [user, setUser] = useState(null);
  console.log(dreams.length);

  return <StateProvider>
    {user !== null ? <Login /> : <DreamList />}
  </StateProvider>;
}

export default App;
