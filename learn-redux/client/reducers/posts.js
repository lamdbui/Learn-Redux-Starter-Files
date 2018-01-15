// a reducer takes in two things:
//
// 1. action - info about what happened
// 2. copy of the current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      // return the updated state
      console.log('Incrementing Likes');
      const i = action.index;
      return [
        ...state.slice(0, i),   // before the one we are updating
        {...state[i], likes: state[i].likes + 1}, // update the one we want
        ...state.slice(i + 1),  // after the one we are updating
      ];
    default:
      return state;
  }
}

export default posts;
