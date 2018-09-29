import { snakeToCamelCase } from 'json-style-converter/es5';
import { getTodos, postTodo, putToggleCompleteTodo, putTodo, deleteTodo } from '_api/todos';
import R from '_utils/ramda';
import { handleError } from './helpers';

export const SET_TODOS = 'SET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const INCREMENT_TODO_ID = 'INCREMENT_TODO_ID';

export const setTodos = todos => ({
  type: SET_TODOS,
  todos,
});

export const addTodo = ({ id, text, createdAt }) => ({
  type: ADD_TODO,
  createdAt,
  id,
  text,
});

export const toggleCompleteTodo = id => ({
  type: TOGGLE_COMPLETE_TODO,
  id,
});

export const updateTodo = ({ id, text, updatedAt }) => ({
  type: UPDATE_TODO,
  updatedAt,
  id,
  text,
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id,
});

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

export const attemptToggleCompleteTodo = id => dispatch =>
  putToggleCompleteTodo({ id })
    .then(data => {
      dispatch(toggleCompleteTodo(id));
      return data;
    })
    .catch(handleError(dispatch));

export const attemptUpdateTodo = ({ id, text }) => dispatch =>
  putTodo({ id, text })
    .then(data => {
      dispatch(updateTodo({ id, text, updatedAt: data.todo.updated_at }));
      return data;
    })
    .catch(handleError(dispatch));

export const attemptDeleteTodo = id => dispatch =>
  deleteTodo({ id })
    .then(data => {
      dispatch(removeTodo(id));
      return data;
    })
    .catch(handleError(dispatch));
