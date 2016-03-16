'use strict';

module.exports = function (input) {
  const inputType = typeof input;

  // validate arguments
  if (inputType !== 'string' && inputType !== 'number') {
    throw new TypeError(`Expected a string, got ${typeof input}`);
  }

  const currentYear = (new Date()).getFullYear().toString();
  if (input.toString() === currentYear) {
    return `${currentYear}`;
  }
  return `${input} - ${currentYear}`;
};
