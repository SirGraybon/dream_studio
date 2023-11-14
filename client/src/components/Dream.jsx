import "../App.css";
import shareState from "../state/StateContext";

const Dream = function () {
  const {selectedDream, setDream} = shareState()

  

  return (
    <div>
      <div onClick={()=> setDream("")}>X</div>
      <div>test</div>

      <img className="image" src={`${selectedDream.image}`} />

      {selectedDream.story.map((paragraph, index) => {
        return <div key={index}>{paragraph}</div>;
      })}
    </div>
  );
};

export default Dream;
