const initState = null;
export default (state = initState, action) => {
  
  if (action.type === "retrieveCollections") {
    return action.payload;
  }
  return state;
};

