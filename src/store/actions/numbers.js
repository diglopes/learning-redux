// Action creator
export function changeMinNumber(newVal) {
  return {
    type: "CHANGED_MIN_NUMBER",
    payload: Number(newVal),
  };
}

export function changeMaxNumber(newVal) {
  return {
    type: "CHANGED_MAX_NUMBER",
    payload: Number(newVal),
  };
}
