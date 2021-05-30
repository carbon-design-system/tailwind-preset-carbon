/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const aspectRatio = require('@tailwindcss/aspect-ratio');
const merge = require('lodash.merge');

function extend(config) {
  return merge(config, {
    theme: {
      aspectRatio: {
        16: '9',
        9: '16',
        2: '1',
        1: '2',
        4: '3',
        3: '4',
        3: '2',
        2: '3',
        1: '1',
      },
    },
    plugins: [aspectRatio],
  });
}

module.exports = {
  extend,
};
