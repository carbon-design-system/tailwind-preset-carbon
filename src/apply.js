/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

function apply(extensions = []) {
  return extensions.reduce((acc, extension) => {
    return extension.extend(acc);
  }, {});
}

module.exports = {
  apply,
};
