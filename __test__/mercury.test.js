//First planet in the solar system

import { TestScheduler } from 'jest';
import Earth from './../src/js/galacticAge.js';
import Mercury from './../src/js/mercury.js';

describe('Mercury', () => {
  
  test('should correctly return an number for age in Mercury years', () => {
    let mercuryInpt = new Mercury(20);
    mercuryInpt.mercuryAgeCalc();
    expect(mercuryInpt.mercuryAge).toEqual(83);
  });

  test('should return age expectancy and difference according to Mercury age', () =>  {
    let mercuryInpt = new Mercury(20);
    mercuryInpt.mercuryAgeCalc();
    let earthAge = new Earth(20, "male");
    let mercuryLE = earthAge.lifeExpectancy(mercuryInpt.mercuryQtn);
    mercuryInpt.differenceCalc(mercuryLE);
    expect(mercuryInpt.ageRemainder).toEqual(246)
  })
});