//Fourth planet

import Earth from './../src/js/galacticAge.js';
import Mars from './../src/js/mars.js';

describe('Mars', () => {
  
  test('should correctly return an number for age in Mars years', () => {
    let marsInpt = new Mars(20);
    marsInpt.marsCalc();
    expect(marsInpt.marsAge).toEqual(11);
  });

  test('should return age expectancy and difference according to Mars age', () =>  {
    let marsInpt = new Mars(20);
    marsInpt.marsCalc();
    let earthAge = new Earth(20, "female"); //fLE = 81
    let marsLE = earthAge.lifeExpectancy(marsInpt.marsQtn); //LE = life expectancy, mars qtn = 1.88
    marsInpt.differenceCalc(marsLE);
    expect(marsInpt.ageRemainder).toEqual(32)
  });

  test('should return positive number if a user enters an age beyond life expectancy', () => {
    let marsInpt = new Mars(110);
    marsInpt.marsCalc();
    let earthAge = new Earth(110, "female");
    let marsLE = earthAge.lifeExpectancy(marsInpt. marsQtn);
    marsInpt.differenceCalc(marsLE);
    expect(marsInpt.ageRemainder).toEqual(16)
  });
});