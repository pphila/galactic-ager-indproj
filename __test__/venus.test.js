// Second planet

import Earth from './../src/js/galacticAge.js';
import Venus from './../src/js/venus';

describe('Venus', () => {

  test('should correctly return a number for age in Venus years', () => {
    let venusInput = new Venus(20);
    venusInput.venusCalc();
    expect(venusInput.venusAge).toEqual(32);
  });

  test('should return age expectancy and difference according to Venus age', () =>  {
    let venusInpt = new Venus(20);
    venusInpt.venusCalc();
    let earthAge = new Earth(20, "male");
    let venusLE = earthAge.lifeExpectancy(venusInpt.venusQtn); //venus quotient = .62
    venusInpt.differenceCalc(venusLE);
    expect(venusInpt.ageRemainder).toEqual(95)
  })
});