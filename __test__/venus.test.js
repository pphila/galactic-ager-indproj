// Second planet

import Earth from './../src/js/galacticAge.js';
import Venus from './../src/js/venus';

describe('Venus', () => {

  test('should correctly return a number for age in Venus years', () => {
    let venusInput = new Venus(20);
    venusInput.venusCalc();
    expect(venusInput.venusAge).toEqual(32);
  });
});