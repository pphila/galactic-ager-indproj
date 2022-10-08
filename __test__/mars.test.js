//Fourth planet

import Earth from './../src/js/galacticAge.js';
import Mars from './../src/js/mars.js';

describe('Mars', () => {
  
  test('should correctly return an number for age in Mars years', () => {
    let marsInpt = new Mars(20);
    marsInpt.marsCalc();
    expect(marsInpt.marsAge).toEqual(11);
  });
});