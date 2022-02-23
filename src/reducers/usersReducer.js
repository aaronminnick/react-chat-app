export default (state = {currentUser: ""}, action) => {
  switch(action.type){
    case 'SET_CURRENT_USER':
      return {...state, currentUser: action.currentUser};
    default:
      return state;
  }
}