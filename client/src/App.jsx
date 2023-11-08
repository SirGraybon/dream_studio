import { useState, useEffect } from "react";
import Dream from "./components/Dream";

import axios from "axios";
import "./App.css";

function App() {
  const [dreams, setDreams] = useState([]);
  const [dream, setDream] = useState({
    dreamID: 0,
    userID: 0,
    title: "",
    image: "",
    story: [],
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
      // setDream(dreams[0])
    });
  }, []);

  return (
    <div>
      {!dream.dreamID &&
        dreams.map((dream, index) => {
          return (
            <div className="dreamListItem" key={index} style={{backgroundImage: `url(${dream.image})` }}>
              {dream.title}
            </div>
          );
        })}
      {dream.dreamID && <Dream dream={dream} />}
    </div>
  );
}

export default App;
