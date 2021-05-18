/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { themes, unstable__meta } = require('@carbon/themes');
const merge = require('lodash.merge');
const { formatToken } = require('./tokens');

const extensions = {};

for (const [key, theme] of Object.entries(themes)) {
  extensions[key] = {
    extend(config) {
      const colors = {};

      for (const [key, value] of Object.entries(theme)) {
        if (isColorToken(key)) {
          colors[formatToken(key)] = value;
        }
      }

      return merge(config, {
        theme: {
          colors,
        },
      });
    },
  };
}

function isColorToken(key) {
  return unstable__meta.colors.some((group) => {
    return group.tokens.some((token) => {
      return token === key;
    });
  });
}

module.exports = extensions;
