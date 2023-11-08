const Dream =  (dream) => {
  // const { dream } = props();
const item = dream
  console.log(` Dream: ${item}`);

  return (
    <div>
      {/* {dream.image && <img className="image" src={`${dream.image}`} />}
    {dream.dreamID &&
      dream.story.map((paragraph, index) => {
        return <div key={index}>{paragraph}</div>;
      })} */}
    </div>
  );
};

export default Dream();
