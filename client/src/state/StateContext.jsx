import { createContext, useContext, useEffect, useReducer } from "react";
import reducer, { initialState } from "./state";


const StateContext = createContext(initialState);
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  ////////////////////DREAMLIST FUNCTIONs////////////////////////////////////////////////////////////

  const generateDreamList = (dreamList)=> {
    console.log(dreamList)
    dispatch({type:"GENERATE_DREAM_LIST", payload: dreamList})
  }
  
  const setUser = (user)=> {
    console.log(user)
    
    dispatch({type:"LOG_USER_IN", payload: user})
  }






  ////////////////////EXPORT FOR FUNCTIONs & STATE////////////////////////////////////////////////////////////
  const value = {
    dreams: state.dreams,
    selectedDream: state.selectedDream,
    user: state.user,
    generateDreamList,
    setUser
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