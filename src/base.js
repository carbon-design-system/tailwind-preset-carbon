/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { colors } = require('@carbon/colors');
const { formatToken } = require('./tokens');

const theme = {
  colors: {},
};

// IBM Design Language colors
for (const [swatch, grades] of Object.entries(colors)) {
  const key = formatToken(swatch);
  theme.colors[key] = {};

  for (const [grade, value] of Object.entries(grades)) {
    if (swatch === 'white' || swatch === 'black') {
      theme.colors[key] = value;
      continue;
    }

    theme.colors[key][grade] = value;
  }
}

module.exports = {
  theme,
};
