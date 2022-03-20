const initState = false;
export default (state = initState, action) => {
  if (action.type === "updateAuth") {
    return action.payload;
  }
  return state;
};
