import axios from "axios";
import { useState } from "react";
import "../styles/dream_studio.css"
import AiTest from "./AiTest";


const DreamStudio = () => {
  const [title, setTitle] = useState("");
  const [partOne, setPartOne] = useState("");
  const [partTwo, setPartTwo] = useState("");
  const [partThree, setPartThree] = useState("");
  const [image, setImage] = useState("");


  const submitDream = () => {
    const dream = {
      title,
      events: [partOne, partTwo, partThree],
      image, user_id: 1
    }
    axios.post("http://localhost:8001/dreams/submit", dream)
  }

  return (
    <div className="dream_stuio_form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <input
        type="text"
        value={partOne}
        onChange={(e) => setPartOne(e.target.value)}
        placeholder="Part One"
      />
      <input
        type="text"
        value={partTwo}
        onChange={(e) => setPartTwo(e.target.value)}
        placeholder="Part Two"
      />
      <input
        type="text"
        value={partThree}
        onChange={(e) => setPartThree(e.target.value)}
        placeholder="Part Three"
      />
      <input
        type="ImageURL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="image URL"
      />

      <div className="submit_button" onClick={() => submitDream()}>Save Dream</div>
      <AiTest/>
    </div>
  );
};

export default DreamStudio;
