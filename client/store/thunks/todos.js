import { deleteTodo, getTodos, postTodo, putTodo, putToggleCompleteTodo } from '_api/todos';

import { addTodo, removeTodo, setTodos, toggleCompleteTodo, updateTodo } from '_store/actions/todos';

import { dispatchError } from '_utils/api';

export const attemptGetTodos = () => dispatch =>
  getTodos()
    .then(({ todos }) => {
      dispatch(setTodos(todos));
      return todos;
    })
    .catch(dispatchError(dispatch));

export const attemptAddTodo = text => dispatch =>
  postTodo({ text })
    .then(({ todo, user }) => {
      dispatch(addTodo(todo));
      return user;
    })
    .catch(dispatchError(dispatch));

export const attemptToggleCompleteTodo = id => dispatch =>
  putToggleCompleteTodo({ id })
    .then(data => {
      dispatch(toggleCompleteTodo(id));
      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptUpdateTodo = (id, text) => dispatch =>
  putTodo({ id, text })
    .then(data => {
      dispatch(updateTodo({ id, text, updatedAt: data.todo.updatedAt }));
      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptDeleteTodo = id => dispatch =>
  deleteTodo({ id })
    .then(data => {
      dispatch(removeTodo(id));
      return data;
    })
    .catch(dispatchError(dispatch));
