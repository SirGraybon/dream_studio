export const initialState = {
  dreams: [],
  selectedDream: {},
  user: {},
};

////////////////////REDUCER SWITCH CASEs////////////////////////////////////////////////////////////
export const reducer = function (state, action) {
  switch (action.type) {
    case "GENERATE_DREAM_LIST": {
      console.log(action.payload)
      const updatedState = {
        ...state,
        dreamList: [action.payload]
      };
      return {
        updatedState
      };
    }

    case "LOG_USER_IN": {

      const updatedState = {
        ...state,
        user: action.payload,
      };
      return updatedState;
    }
  }
};
export default reducer;
