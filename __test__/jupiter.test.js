//Fifth planet

import { TestScheduler } from 'jest';
import Earth from './../src/js/galacticAge.js';
import Jupiter from './../src/js/jupiter.js';

describe('Jupiter', () => {
  test('should correctly return a number for age in Jupiter years', () => {
    let jupiterInpt = new Jupiter(20);
    jupiterInpt.jupiterCalc();
    expect(jupiterInpt.jupiterAge).toEqual(2)
  })
})