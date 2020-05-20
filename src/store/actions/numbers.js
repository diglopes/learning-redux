import * as types from "./actionTypes";

// Action creator
export function changeMinNumber(newVal) {
  return {
    type: types.CHANGED_MIN_NUMBER,
    payload: Number(newVal),
  };
}

export function changeMaxNumber(newVal) {
  return {
    type: types.CHANGED_MAX_NUMBER,
    payload: Number(newVal),
  };
}
