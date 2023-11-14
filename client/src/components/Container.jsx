import { useEffect } from "react";
import shareState from "../state/StateContext";
import Login from "./Login";
import axios from "axios";
import DreamList from "./DreamList";

const Container = function () {
  const { user, generateDreamList } = shareState();

  useEffect(() => {
    axios.get("http://localhost:8001/").then((data) => {
      const dreamData = data.data;
      generateDreamList(dreamData);
    });
  }, []);

  return <>{!user ? <Login /> : <DreamList />}</>;
};

export default Container;
