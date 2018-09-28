export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const HIDE_TODO = 'HIDE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const INCREMENT_TODO_ID = 'INCREMENT_TODO_ID';

export const incrementTodoId = () => ({
  type: INCREMENT_TODO_ID,
});

export function addTodo(id, text) {
  return {
    type: ADD_TODO,
    createdAt: Date.now(),
    id,
    text,
  };
}

export function toggleCompleteTodo(id) {
  return {
    type: TOGGLE_COMPLETE_TODO,
    id,
  };
}

export function updateTodo(id, text) {
  return {
    type: UPDATE_TODO,
    updatedAt: Date.now(),
    text,
    id,
  };
}

export function hideTodo(id) {
  return {
    type: HIDE_TODO,
    id,
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id,
  };
}

export const addTodoAndIncrementId = text => (dispatch, getState) => {
  const { nextTodoId } = getState();
  dispatch(addTodo(nextTodoId, text));
  dispatch(incrementTodoId());
};
