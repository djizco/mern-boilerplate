import request from 'superagent';
import { handleSuccess, handleError } from './helpers';

export const postTodo = info =>
  request.post('/api/todos')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const getTodos = () =>
  request.get('/api/todos')
    .then(handleSuccess)
    .catch(handleError);
