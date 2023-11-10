import { useState, useEffect } from "react";
import shareState, { StateProvider } from "./state/StateContext";
import axios from "axios";
import "./App.css";
import DreamList from "./components/DreamList.jsx";

function App() {
  const { dreams } = shareState();
  // const [dreams, setDreams] = useState([]);
  // const [show, setShow] = useState(false);
  // const [dream, setDream] = useState({});
  // const [user, setUser] = useState(null);



  return (
    <StateProvider>
      {dreams.length > 0 && <DreamList />}
    </StateProvider>
  );
}

export default App;
