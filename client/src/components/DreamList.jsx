import "../App.css";
import shareState from "../state/StateContext";
import Dream from "./Dream";

const DreamList = () => {
  const { dreamList, selectedDream, setDream } = shareState();

  return (
    <div>
      {selectedDream ? (
        <Dream />
      ) : (
        dreamList.map((dream, index) => {
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
