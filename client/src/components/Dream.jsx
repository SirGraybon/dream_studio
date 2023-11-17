import "../styles/dream.css";
import shareState from "../state/StateContext";

const Dream = function () {
  const { selectedDream, setDream } = shareState();

  return (
    <div className="dream">
      <div style={{ cursor: "pointer" }} onClick={() => setDream("")}>
        X
      </div>

      {selectedDream.story.map((paragraph, index) => {
        return (
          <div key={index}>
            <img className="image" src={`${paragraph.image}`} />
            <div className="dream_event" key={index}>{paragraph.event}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Dream;
