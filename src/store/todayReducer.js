const defaultState = {
  usd: "",
  eur: "",
  rub: "",
  date: new Date().toLocaleString(),
};

export const todayReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_USD":
      return { ...state, usd: action.payload };
    case "SET_EUR":
      return { ...state, eur: action.payload };
    case "SET_RUB":
      return { ...state, rub: action.payload };
    case "SET_DATE":
      return { ...state, date: action.payload };
    default:
      return state;
  }
};
