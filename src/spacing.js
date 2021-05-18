/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { spacing } = require('@carbon/layout');
const merge = require('lodash.merge');

function extend(config) {
  const theme = {
    spacing: {
      0: '0',
    },
  };

  for (let i = 0; i < spacing.length; i++) {
    theme.spacing[i + 1] = spacing[i];
  }

  return merge(config, {
    theme,
  });
}

module.exports = {
  extend,
};
