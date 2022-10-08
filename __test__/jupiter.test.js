//Fifth planet

import { TestScheduler } from 'jest';
import Earth from './../src/js/galacticAge.js';
import Jupiter from './../src/js/jupiter.js';

describe('Jupiter', () => {
  test('should correctly return a number for age in Jupiter years', () => {
    let jupiterInpt = new Jupiter(20);
    jupiterInpt.jupiterCalc();
    expect(jupiterInpt.jupiterAge).toEqual(2)
  });

  test('should return age expectancy and difference according to Jupiter age', () =>  {
    let jupiterInpt = new Mars(20);
    jupiterInpt.jupiterCalc();
    let earthAge = new Earth(20, "female"); //fLE = 81
    let jupiterLE = earthAge.lifeExpectancy(jupterInpt. jupiterQtn); //LE = life expectancy, jupiter qtn = 11.86
    jupuiterInpt.differenceCalc(jupiterLE);
    expect(jupiterInpt.ageRemainder).toEqual(5)
  });
});