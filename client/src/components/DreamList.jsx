import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import shareState from "../state/StateContext";

const DreamList = () => {
  const { dreams, generateDreamList } = shareState();

  useEffect(() => {
    axios.get("http://localhost:8001/").then((data) => {
      console.log(data.data);
      const dreamData = data.data;
      generateDreamList(dreamData);
    });
  }, []);

  return (
    <div>
      {dreams.map((dream, index) => {
        return (
          <div
            className="dreamListItem"
            key={index}
            style={{ backgroundImage: `url(${dream.image})` }}
          >
            {dream.title}
          </div>
        );
      })}
    </div>
  );
};

export default DreamList;
