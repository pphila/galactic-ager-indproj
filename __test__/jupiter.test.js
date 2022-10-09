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
    let jupiterInpt = new Jupiter(20);
    jupiterInpt.jupiterCalc();
    let earthAge = new Earth(20, "female"); //fLE = 81
    let jupiterLE = earthAge.lifeExpectancy(jupiterInpt. jupiterQtn); //LE = life expectancy, jupiter qtn = 11.86
    jupiterInpt.differenceCalc(jupiterLE);
    expect(jupiterInpt.ageRemainder).toEqual(5)
  });

  test('should return positive number if a user enters an age beyond life expectancy', () => {
    let jupiterInpt = new Jupiter(95);
    jupiterInpt.jupiterCalc();
    let earthAge = new Earth(95, "female");
    let jupiterLE = earthAge.lifeExpectancy(jupiterInpt. jupiterQtn);
    jupiterInpt.differenceCalc(jupiterLE);
    expect(jupiterInpt.ageRemainder).toEqual(1)
  });
});