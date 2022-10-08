import { EarthAge } from './../src/js/galacticAge.js';

describe('EarthAge', () => {

  test('should correctly return earth age object with life expetancy factors', () => {
    const earthAge = new EarthAge(20, "male");
    expect(earthAge.age).toEqual(20);
    expect(earthAge.gender).toMatch('male');
  });
});