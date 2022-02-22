export default (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_CHANNEL":
      return {...state, currentChannelId: action.currentChannelId}
    default:
      return state;
  }
};