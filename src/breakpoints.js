/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { breakpoints } = require('@carbon/layout');
const merge = require('lodash.merge');

function extend(config) {
  const screens = {
    extend: {},
  };

  for (const [key, value] of Object.entries(breakpoints)) {
    screens.extend[key] = value.width;
  }

  return merge(config, {
    theme: {
      screens,
    },
  });
}

module.exports = {
  extend,
};
