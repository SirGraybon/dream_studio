import "../App.css";
import shareState from "../state/StateContext";

const Dream = function () {
  const {selectedDream, setDream} = shareState()

  

  return (
    <div>
      <div style={{cursor: "pointer"}} onClick={()=> setDream("")}>X</div>
      

      <img className="image" src={`${selectedDream.image}`} />

      {selectedDream.story.map((paragraph, index) => {
        return <div key={index}>{paragraph}</div>;
      })}
    </div>
  );
};

export default Dream;
