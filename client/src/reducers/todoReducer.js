const initialState = {
  items: ['do laundry', 'wash dishes', 'pass interview'],
  todoErrored: false,
  todoError: null
};

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'TODO_ERROR':
      return {
        ...state, 
        errored: action.todoErrored,
        error: action.todoError
      };
    case 'ADD_TO_TODO':
      return {
        ...state,
        items: state.items.concat(action.item)
      }
    case 'DELETE_FROM_TODO':
      return {
        ...state,
        items: state.items.slice(0, action.index).concat(state.items.slice(action.index + 1))
      }
    default:
      return state;
  }
}

export default todoReducer;
