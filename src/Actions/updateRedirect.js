export default (returnToString) => {
  return {
    type: "updateRedirect",
    payload: returnToString,
  };
};
