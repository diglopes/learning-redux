import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numbers: function (state, action) {
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
        return {
          min: 7,
          max: 31,
        };
    }
  },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
