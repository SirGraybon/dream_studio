export const initialState = {
  dreams: [],
  selectedDream: {},
  user: null,
};

////////////////////REDUCER SWITCH CASEs////////////////////////////////////////////////////////////
export const reducer = function (state, action) {
  switch (action.type) {
    case "GENERATE_DREAM_LIST": {
      const updatedState = {
        ...state,
        dreamList: action.payload,
      };
      return {
        updatedState
      };
    }
  }
};
export default reducer;
