const initState = "/";
export default (state = initState, action) => {
  if (action.type === "updateRedirect") {
    return action.payload;
  }
  return state;
};
