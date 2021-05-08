const defaultState = {
  cur1: 1,
  cur1Value: "",
  cur2: 1,
  input: "",
  result: "",
  cur11: "USD",
  cur22: "USD",
};

export const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_CURRENCY1":
      return { ...state, cur1: action.payload };
    case "GET_CURRENCY2":
      return { ...state, cur2: action.payload };
    case "SET_INPUT":
      return { ...state, input: action.payload };
    case "SET_CUR1VALUE":
      return { ...state, cur1Value: action.payload };
    case "SET_RESULT":
      return { ...state, result: action.payload };
    case "SET_DEF":
      return { ...state, def: action.payload };
    case "DEF_STATE":
      return defaultState;
    case "CHANGE_CUR2":
      return { ...state, cur22: action.payload };
    case "CHANGE_CUR1":
      return { ...state, cur11: action.payload };

    default:
      return state;
  }
};
