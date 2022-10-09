import Earth from './../src/js/galacticAge.js';

describe('Earth', () => {

  test('should correctly return earth age object with life expetancy factors', () => {
    let earth = new Earth(20, "male");
    expect(earth.age).toEqual(20);
    expect(earth.gender).toMatch('male');
  });

  test('should return a life expectancy for biological male choice', () => {
    let earthAge = new Earth(20, "male");
    earthAge.lifeExptCalc();
    expect(earthAge.ageExpect).toEqual(79); //accoding to recent US census is about 79
  });

  test('should return a life expectancy for biological female choice', () => {
    let earthAge = new Earth(20, "female");
    earthAge.lifeExptCalc();
    expect(earthAge.ageExpect).toEqual(81); //US femail census is abour 81
  });
});