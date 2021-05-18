/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { fontFamilies } = require('@carbon/type');
const merge = require('lodash.merge');
const { formatToken } = require('./tokens');

function extend(config) {
  const fontFamily = {};

  for (const [key, value] of Object.entries(fontFamilies)) {
    fontFamily[formatToken(key)] = value.split(',').map((part) => {
      return part.trim();
    });
  }

  return merge(config, {
    theme: {
      fontFamily,
    },
  });
}

module.exports = {
  extend,
};
