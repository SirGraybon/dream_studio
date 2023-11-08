import { useState, useEffect } from "react";
import Dream from "./components/Dream.jsx";

import axios from "axios";
import "./App.css";

function App() {
  const [dreams, setDreams] = useState([]);
  const [show, setShow] = useState(false);
  const [dream, setDream] = useState({

  });

  // const getDreams = () => {
  //   axios.get("http://localhost:8001/").then((data) => {
  //     console.log(data.data);
  //     const newDream = data.data;
  //     setDreams(newDream);
  //   });
  // };

  useEffect(() => {
    axios.get("http://localhost:8001/").then((data) => {
      console.log(data.data);
      const newDream = data.data;
      setDreams(newDream);
      console.log();
      setDream(newDream[0]);
    });
  }, []);

  const handleClick= ()=> {
    setShow(!show)
  }

  return (
    <div>
      {show && <Dream dream={ dream } />}
      {dreams.map((dream, index) => {
        return (
          <div
            className="dreamListItem"
            key={index}
            style={{ backgroundImage: `url(${dream.image})` }}
            onClick={() => handleClick()}
          >
            {dream.title}
          </div>
        );
      })}
    </div>
  );
}

export default App;
