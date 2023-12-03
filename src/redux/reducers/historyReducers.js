// src/redux/reducers/historyReducer.js
const initialState = {
    history: [],
  };
  
  const historyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_HISTORY':
        return {
          ...state,
          history: [...state.history, action.payload],
        };
      // Add other cases as needed
      default:
        return state;
    }
  };
  
  export default historyReducer;
  