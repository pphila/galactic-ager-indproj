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
});