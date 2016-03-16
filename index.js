'use strict';

module.exports = function (input) {
  const inputType = typeof input;

  // validate arguments
  if (inputType !== 'string' && inputType !== 'number') {
    throw new TypeError(`Expected a string, got ${typeof input}`);
  }

  const currentYear = (new Date()).getFullYear().toString();
  return input.toString() === currentYear ? `${currentYear}` : `${input} - ${currentYear}`;
};
