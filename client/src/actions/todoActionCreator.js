export function addTodo(todo) {
  return {
    type: 'ADD_TO_TODO',
    item: todo
  };
}

export function moveToDoing(index) {
  return {
    type: 'DELETE_FROM_TODO',
    index
  };
}