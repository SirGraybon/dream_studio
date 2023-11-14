import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import shareState from "../state/StateContext";


const DreamList = () => {
  const { dreams, generateDreamList, user } = shareState();



  useEffect(() => {
    console.log(dreams);
  }, [dreams]);

  return (
    <div>

      {
        dreams.map((dream, index) => {
          console.log("mapping");
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
