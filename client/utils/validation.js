import R from 'ramda';

export const validateUsername = username => {
  let valid = true;
  let message = 'Username Valid';

  if (!R.match(/^[a-zA-Z0-9_]+$/, username).length) {
    message = 'Invalid character used';
    valid = false;
  } else if (username.length < 4) {
    message = 'Username must be at least four characters';
    valid = false;
  } else if (username.length > 20) {
    message = 'Username must be 20 characters or less';
    valid = false;
  } else if (R.match(/[a-zA-Z]/g, username).length < 4) {
    message = 'Username must include at least four letters';
    valid = false;
  }
  return { valid, message };
};

export const validatePassword = (username, password) => {
  let valid = true;
  let message = 'Password valid';

  if (password.length < 6) {
    valid = false;
    message = 'Password must be at least six characters';
  } else if (password.length > 16) {
    valid = false;
    message = 'Password must be 16 characters or less';
  } else if (username === password) {
    valid = false;
    message = 'Username and password must be different';
  } else if (!R.match(/[0-9]/, password).length) {
    valid = false;
    message = 'Password must include at least one number';
  }

  return { valid, message };
};

export const validateName = name => {
  if (name === '') {
    return true;
  }
  if (!R.match(/^[a-zA-ZÀ-ÿ'.\s]+$/, name).length) {
    return false;
  }
  if (name.length > 20) {
    return false;
  }
  return true;
};
