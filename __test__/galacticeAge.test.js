import Earth from './../src/js/galacticAge.js';

describe('Earth', () => {

  test('should correctly return earth age object with life expetancy factors', () => {
    let earth = new Earth(20, "male");
    expect(earth.age).toEqual(20);
    expect(earth.gender).toMatch('male');
  });

  test('should return a life expectancy for biological male choice', () => {
    let earth = new Earth(20, "male");
    expect(earth.ageExpect).toEqual(79); //accoding to recent US census is about 79
  })
});