import "../styles/dream.css";
import shareState from "../state/StateContext";
import axios from "axios";




const DreamDraft = function () {
  const { selectedDream, setDream } = shareState();

  const submitDream = () => {
    console.log(selectedDream)

    axios.post("http://localhost:8001/dreams/submit", selectedDream);
  };

  return (
    <div className="dream">

<div>{selectedDream.title}</div>
      {selectedDream.story.map((paragraph, index) => {
        return (
          <div key={index}>
            <img className="image" src={`${paragraph.image}`} />
            <div className="dream_event" key={index}>{paragraph.event}</div>
          </div>
        );
      })}
      <button onClick={() => submitDream()}>Save Dream </button>
    </div>
  );
};

export default DreamDraft;
