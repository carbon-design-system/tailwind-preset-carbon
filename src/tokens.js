/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

function formatToken(token) {
  let formatted = '';

  for (const letter of token) {
    if (!isNaN(letter)) {
      if (isNaN(formatted[formatted.length - 1])) {
        formatted += '-';
      }
      formatted += letter;
      continue;
    }

    if (letter === letter.toUpperCase()) {
      if (formatted[formatted.length - 1] !== '-') {
        formatted += '-';
      }
      formatted += letter.toLowerCase();
      continue;
    }

    formatted += letter;
  }

  return formatted;
}

module.exports = {
  formatToken,
};
