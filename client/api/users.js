import request from 'superagent';
import { handleSuccess, handleError } from './helpers';

export const postCheckUsername = username =>
  request.post('/api/users/checkusername')
    .send({ username })
    .then(handleSuccess)
    .catch(handleError);

export const placeholder = () => {};
