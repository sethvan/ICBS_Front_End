const initialStatus = {
  rendering: true,
};

export default (state = initialStatus, action) => {
  if (action.type === "updateHome") {
    if (action.payload.rendering === true) {
      return {
        rendering: true,
      };
    } else if (action.payload.rendering === false) {
      return {
        rendering: false,
      };
    }
  } else {
    return state;
  }
};
