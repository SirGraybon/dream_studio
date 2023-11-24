import { useState } from "react";
import "../styles/dream_studio.css";
import shareState from "../state/StateContext";
import DreamDraft from "./DreamDraft";
import AiTest from "./AiTest";
import OpenAI from "openai";
import { OPENAI_API_KEY } from "../../openAiAPIKey";
import LoadingSpinner from "./LoadingSpinner";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const DreamStudio = () => {
  const [title, setTitle] = useState("");
  const [partOne, setPartOne] = useState("");
  const [partTwo, setPartTwo] = useState("");
  const [partThree, setPartThree] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [loading, setloading] = useState(false);
  const { setDream, selectedDream } = shareState();




  async function testQuery() {
    const response1 = await openai.images
      .generate({
        model: "dall-e-2",
        prompt: `${partOne}`,
        n: 1,
        size: "1024x1024",
      })
      

      const response2 = await openai.images
      .generate({
        model: "dall-e-2",
        prompt: `${partTwo}`,
        n: 1,
        size: "1024x1024",
      })
      

      const response3 = await openai.images
      .generate({
        model: "dall-e-2",
        prompt: `${partThree}`,
        n: 1,
        size: "1024x1024",
      })
      
      

      const images =  {
        one: response1.data[0].url,
        two: response2.data[0].url,
        three: response3.data[0].url
      }

      return createDream(images)
  }

  const createDream = (response) => {
    const draft = {
      title: title,
      story: [
        { event: partOne, image: response.one },
        { event: partTwo, image: response.two },
        { event: partThree, image: response.three },
      ],
      image: image1,
      user_id: 1,
    };
    setDream(draft);
    setloading(false);
  };

  const handleGenerate = () => {
    setloading(true);
    Promise.all([testQuery()]).then((response) => createDream(response));
  };

  return (
    <>
      {!selectedDream && !loading && (
        <div className="dream_stuio_form">
          <input
            className="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
          />
          <textarea
            className="story_part"
            type="text"
            value={partOne}
            onChange={(e) => setPartOne(e.target.value)}
            placeholder="Part One"
          />
          <textarea
            className="story_part"
            type="text"
            value={partTwo}
            onChange={(e) => setPartTwo(e.target.value)}
            placeholder="Part Two"
          />
          <textarea
            className="story_part"
            type="text"
            value={partThree}
            onChange={(e) => setPartThree(e.target.value)}
            placeholder="Part Three"
          />

          <div className="submit_button" onClick={() => testQuery()}>
            Generate Dream
          </div>
          <div className="submit_button" onClick={() => createDream()}>
            failsafe--show
          </div>
        </div>
      )}
      {selectedDream && !loading && <DreamDraft />}
      {loading && <LoadingSpinner />}
    </>
  );
};

export default DreamStudio;
