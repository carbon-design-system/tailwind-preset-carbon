/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { themes, unstable__meta } = require('@carbon/themes');
const clone = require('lodash.clonedeep');
const base = require('./base');
const { formatToken } = require('./tokens');

function addThemeToConfig(name) {
  const config = clone(base);

  for (const [key, value] of Object.entries(themes[name])) {
    if (isColorToken(key)) {
      config.theme.colors[formatToken(key)] = value;
    }
  }

  return config;
}

function isColorToken(key) {
  return unstable__meta.colors.some((group) => {
    return group.tokens.some((token) => {
      return token === key;
    });
  });
}

module.exports = {
  addThemeToConfig,
};
