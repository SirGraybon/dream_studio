import "../styles/dream_list.css";
import shareState from "../state/StateContext";
import Dream from "./Dream";
import axios from "axios";
import { useEffect } from "react";

const DreamList = () => {
  const { dreamList, selectedDream, setDream, generateDreamList } = shareState();


  useEffect(() => {
    axios.get("http://localhost:8001/dreams/").then((data) => {
      const dreamData = data.data.dreams.rows;
      const dreamsList = [];
      let dream = { story: [] };
      dreamData.forEach((chapter) => {
        const target = dreamsList.find((d) => d.id === chapter.dream_id);
        if (!target) {
          dreamsList.push({
            id: chapter.dream_id,
            title: chapter.title,
            story: [],
            image: chapter.image,
          });
        }
      });
      dreamData.forEach((chapter) => {
        const target = dreamsList.find((d) => d.id === chapter.dream_id);
        target.story[chapter.dream_index] = {event: chapter.description, image: chapter.image};
      });

      // const dreamList = data.data.dreams.rows
      generateDreamList(dreamsList);
    });
  }, []);
  return (
    <div className="dream_list_component">
      {selectedDream ? (
        <Dream />
      ) : (
        dreamList.map((dream, index) => {
          return (
            <div
              className="dreamListItem"
              key={index}
              style={{ backgroundImage: `url(${dream.image})` }}
              onClick={() => setDream(dreamList[index])}
            >
              {dream.title}
            </div>
          );
        })
      )}
    </div>
  );
};

export default DreamList;
