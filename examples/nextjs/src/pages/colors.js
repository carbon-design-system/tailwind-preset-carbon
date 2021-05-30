import React from 'react';
import preset from '../../../..';

export default function Colors() {
  const colors = Object.entries(preset.theme.colors).flatMap(([key, value]) => {
    if (typeof value === 'object') {
      return Object.entries(value).flatMap(([grade]) => {
        return `${key}-${grade}`;
      });
    }
    return key;
  });

  return (
    <>
      <h1>Colors</h1>
      <ul>
        {colors.map((color) => {
          return (
            <React.Fragment key={color}>
              <li className={`bg-${color}`}>{color}</li>
              <li className={`text-${color}`}>{color}</li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
}
