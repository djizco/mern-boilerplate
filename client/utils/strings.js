import R from 'ramda';

export const capitalize = string => R.concat(R.toUpper(R.head(string)), R.tail(string));
