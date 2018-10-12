import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const postTodo = info =>
  request.post('/api/todos')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const getTodos = () =>
  request.get('/api/todos')
    .then(handleSuccess)
    .catch(handleError);

export const putToggleCompleteTodo = info =>
  request.put('/api/todos/complete')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const putTodo = info =>
  request.put('/api/todos')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const deleteTodo = info =>
  request.delete('/api/todos')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);
