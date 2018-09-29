import { snakeToCamelCase } from 'json-style-converter/es5';
import { getTodos, postTodo } from '_api/todos';
import R from '_utils/ramda';
import { handleError } from './helpers';

export const SET_TODOS = 'SET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const HIDE_TODO = 'HIDE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const INCREMENT_TODO_ID = 'INCREMENT_TODO_ID';

export const setTodos = todos => ({
  type: SET_TODOS,
  todos,
});

export function addTodo({ id, text, createdAt }) {
  return {
    type: ADD_TODO,
    createdAt,
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

export const attemptGetTodos = () => dispatch =>
  getTodos()
    .then(data => {
      const todos = R.map(todo =>
        R.omit(['Id'], R.assoc('id', todo._id, snakeToCamelCase(todo))), data.todos);

      dispatch(setTodos(todos));
      return data.todos;
    })
    .catch(handleError(dispatch));

export const attemptAddTodo = text => dispatch =>
  postTodo({ text })
    .then(data => {
      const todo = R.omit(['Id'], R.assoc('id', data.todo._id, snakeToCamelCase(data.todo)));

      dispatch(addTodo(todo));
      return data.user;
    })
    .catch(handleError(dispatch));
