import OpenAI from "openai";
import { OPENAI_API_KEY } from "../../openAiAPIKey";
import { useState } from "react";
// import wget  from 'node-wget';

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
const AiTest = () => {
  const [image, setImage] = useState("https://oaidalleapiprodscus.blob.core.windows.net/private/org-DeCq4aUYk7qBHQqx45W9bTxz/user-BK4T0unTx1cwSvsw37sw0QLP/img-o8BcmfITBlhEAAKrbUDl8Os4.png?st=2023-11-23T15%3A48%3A11Z&se=2023-11-23T17%3A48%3A11Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-11-22T20%3A15%3A27Z&ske=2023-11-23T20%3A15%3A27Z&sks=b&skv=2021-08-06&sig=xSKiGtGtMY3sGLAwywk45nI%2BgZQmG36IZ%2BpuSFO9ulY%3D");
  const [prompt, setPrompt] = useState(null);

  async function testQuery() {
    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt: `${prompt}`,
      n: 1,
      size: "1024x1024",
    });

    const image_url = response.data[0].url;

    console.log(response);
    setImage(image_url);
  }
  
  const downloadImage = (imageUrl) => {
    fetch(imageUrl, {
      mode : 'no-cors',
    })
        .then(response => response.blob())
        .then(blob => {
          // Create a temporary anchor element
          const url = window.URL.createObjectURL(blob);
          const link = document.getElementById('testImage');
          link.href = image;

          // Extract the filename from the URL
          const filename = "testImage";

          // Set the download attribute and filename
          link.setAttribute('download', filename);
          document.body.appendChild(link);

          // Simulate a click on the anchor element to start the download
          link.click();

          // Clean up the temporary anchor element
          link.parentNode.removeChild(link);

          // Set the downloaded image URL to display on the page
          // setImage(url);
      })
      .catch(error => {
          console.error('Error downloading image:', error);
      });
};
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
        <div>

        <div
          className="dreamListItem"
          id="testImage"
          download="testImage"
          target="_blank"
          href={image}
          style={{ backgroundImage: `url(${image})` }} s
          ></div>
          <a download="testImage" target="_blank" href={image}> DOWNLOAD</a>
        <button onClick={()=> downloadImage(image)}> download </button>
          </div>
      )}

    </>
  );
};

export default AiTest;


