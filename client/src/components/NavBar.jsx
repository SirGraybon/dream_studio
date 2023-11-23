import shareState from "../state/StateContext";
import "../styles/navbar.css";

const NavBar = () => {
  const { setUser, user, changeView } = shareState();

  return (
    <div className="navbar_container">
      <div className="navbar">
        <div className="navbar_item" onClick={() => changeView("home")}>
          dream_studio
        </div>
        {user && (
          <div className="navbar_user">
            <div className="navbar_item" onClick={() => changeView("AI_TEST")}>AI Test</div>
            <div className="navbar_item" onClick={() => setUser("")}>
              logout
            </div>
            <div className="navbar_item">Profile</div>
            <div className="new_dream" onClick={() => changeView("dream_studio")}> + New Dream</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
