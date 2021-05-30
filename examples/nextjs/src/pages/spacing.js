/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { spacing } = require('@carbon/layout');

export default function SpacingPage() {
  return (
    <>
      <h1>Spacing scale</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Pixels</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>0</td>
            <th></th>
          </tr>
          {spacing.map((rem, index) => {
            const value = parseFloat(rem.replace(/rem/, ''), 10);
            return (
              <tr key={rem}>
                <td>{index + 1}</td>
                <td>{rem}</td>
                <td>
                  <div className="flex items-center">
                    {value * 16}px
                    <div style={{ width: rem }} className="h-4 bg-blue-50" />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
