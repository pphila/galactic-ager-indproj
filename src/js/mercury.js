export default class Mercury {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = 0;
  }

  mercuryAgeCalc() {
    this.mercuryAge = Math.round(this.earthAge / 0.24);
  }
}