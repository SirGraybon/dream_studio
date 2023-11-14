import "../App.css";
import shareState from "../state/StateContext";
import Dream from "./Dream";

const DreamList = () => {
  const { dreamList, selectedDream, setDream } = shareState();

  console.log(dreamList);

  return (
    <div>
      {selectedDream ? (
        <Dream />
      ) : (
        dreamList.map((dream, index) => {
          console.log("mapping");
          return (
            <div
              className="dreamListItem"
              key={index}
              style={{ backgroundImage: `url(${dream.image})` }}
              onClick={() => setDream(index)}
            >
              {dream.title}
            </div>
          );
        })
      )}
    </div>
  );
};

export default DreamList;
