export default (isAdminView) => {
  return {
    type: "updateAuth",
    payload: isAdminView,
  };
};
