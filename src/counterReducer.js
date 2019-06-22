const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, counter: state.counter + action.payload };
    case "REMOVE":
      return { ...state, counter: state.counter - action.payload };
    case "RESET":
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};

export default counterReducer;
