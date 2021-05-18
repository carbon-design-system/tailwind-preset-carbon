/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @jest-environment node
 */

'use strict';

const fs = require('fs');
const path = require('path');

const themes = [
  ['white', 'index.js'],
  ['g10', 'g10.js'],
  ['g90', 'g90.js'],
  ['g100', 'g100.js'],
];

test.each(themes)('%s should export a tailwind preset', (_theme, basename) => {
  const filepath = path.resolve(__dirname, '..', basename);
  expect(fs.existsSync(filepath)).toBe(true);

  const config = require(filepath);
  expect(config).toMatchSnapshot();
});
