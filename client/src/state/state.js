export const initialState = {
  dreamList: [],
  selectedDream: "",
  user: "",
  view:"home"
};

////////////////////REDUCER SWITCH CASEs////////////////////////////////////////////////////////////
export const reducer = function (state, action) {
  switch (action.type) {
    case "GENERATE_DREAM_LIST": {
      const updatedState = {
        ...state,
        dreamList: action.payload,
      };
      return updatedState;
    }
    case "SET_ACTIVE_DREAM": {
      const selectedDream = state.dreamList[action.payload]
      const updatedState = {
        ...state,
        selectedDream: selectedDream,
      };
      return updatedState;
    }

    case "LOG_USER_IN": {
      const updatedState = {
        ...state,
        user: action.payload,
      };
      return updatedState;
    }
    case "CHANGE_VIEW": {
      const updatedState = {
        ...state,
        selectedDream: "",
        view: action.payload,
      };
      return updatedState;
    }
  }
};
export default reducer;
