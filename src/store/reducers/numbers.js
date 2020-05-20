const INITIAL_STATE = {
  min: 7,
  max: 31,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CHANGED_MIN_NUMBER":
      return {
        ...state,
        min: action.payload,
      };
    case "CHANGED_MAX_NUMBER":
      return {
        ...state,
        max: action.payload,
      };
    default:
      return state;
  }
}
