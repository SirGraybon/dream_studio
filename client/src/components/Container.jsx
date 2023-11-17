import { useEffect } from "react";
import shareState from "../state/StateContext";
import Login from "./Login";
import axios from "axios";
import DreamList from "./DreamList";
import NavBar from "./NavBar";
import DreamStudio from "./DreamStudio";

const Container = function () {
  const { user, generateDreamList, view } = shareState();

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
        target.story[chapter.dream_index] = chapter.description;
      });

      // const dreamList = data.data.dreams.rows
      generateDreamList(dreamsList);
    });
  }, []);

  return (
    <>
    <NavBar/>
{!user && <Login/>}
{user && view === "home" && <DreamList/>}
{user && view === "dream_studio" && <DreamStudio/>}
    </>
  );
};

export default Container;
