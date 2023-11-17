import { createContext, useContext, useEffect, useReducer } from "react";
import reducer, { initialState } from "./state";

const StateContext = createContext(initialState);
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  ////////////////////USER FUNCTIONs////////////////////////////////////////////////////////////

  const setUser = (user) => {
    dispatch({ type: "LOG_USER_IN", payload: user });
  };
  ////////////////////NAVIGATION FUNCTIONs////////////////////////////////////////////////////////////

  const changeView = (view) => {
    dispatch({ type: "CHANGE_VIEW", payload: view });
  };

  ////////////////////DREAMLIST FUNCTIONs////////////////////////////////////////////////////////////
  const generateDreamList = (dreamList) => {
    dispatch({ type: "GENERATE_DREAM_LIST", payload: dreamList });
  };
  const setDream = (dreamIndex) => {
    dispatch({ type: "SET_ACTIVE_DREAM", payload: dreamIndex });
  };

  ////////////////////EXPORT FOR FUNCTIONs & STATE////////////////////////////////////////////////////////////
  const value = {
    dreamList: state.dreamList,
    selectedDream: state.selectedDream,
    user: state.user,
    view: state.view,
    generateDreamList,
    setUser,
    setDream,
    changeView
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

const shareState = () => {
  const context = useContext(StateContext);
  return context;
};

export default shareState;
