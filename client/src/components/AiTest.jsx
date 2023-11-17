import OpenAI from "openai";
import { OPENAI_API_KEY } from "../../openAiAPIKey";
import { useState } from "react";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
const AiTest = () => {
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState(null);

  async function testQuery() {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `${prompt}`,
      n: 1,
      size: "1024x1024",
    });

    const image_url = response.data[0].url;

    console.log(image_url);
    setImage(image_url);
  }

  return (
    <>
            <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Prompt"
      />
      <button onClick={() => testQuery()}>testQuery</button>
      {image && (
        <div
          className="dreamListItem"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      )}
    </>
  );
};

export default AiTest;
