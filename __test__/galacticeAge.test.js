import Earth from './../src/js/galacticAge.js';

describe('EarthAge', () => {

  test('should correctly return earth age object with life expetancy factors', () => {
    const earth = new Earth(20, "male");
    expect(earth.age).toEqual(20);
    expect(earth.gender).toMatch('male');
  });
});