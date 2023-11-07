import { useState, useEffect } from "react";

import axios from "axios";
import "./App.css";

function App() {
  const [dream, setDream] = useState({
    story: ["placeholder", "placeholder", "placeholder"],
  });

  const getDream =()=> {

    axios.get("http://localhost:8001/").then((data) => {
      console.log(data.data);
      const newDream = data.data;
      setDream(newDream);
    })
  }



  return (
    
    <div>
      {dream.dreamID && dream.story.map((paragraph) => {
        return <div>{paragraph}</div>;
      })
      }
      <img src={dream.image} alt="" />
      <button onClick={()=> getDream()}> Get Dream</button>
    </div>
  );
}

export default App;
