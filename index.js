/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { apply } = require('./src/apply');
const breakpoints = require('./src/breakpoints');
const colors = require('./src/colors');
const spacing = require('./src/spacing');
const themes = require('./src/themes');
const type = require('./src/type');

module.exports = apply([breakpoints, colors, spacing, themes.white, type]);
