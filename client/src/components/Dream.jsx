import "../App.css";

const Dream = function (props) {
  const displayedDream = props.dream;

  console.log(` Dream: ${displayedDream}`);

  return (
    <div>
      <div>test</div>

      <img className="image" src={`${displayedDream.image}`} />

      {displayedDream.story.map((paragraph, index) => {
        return <div key={index}>{paragraph}</div>;
      })}
    </div>
  );
};

export default Dream;
