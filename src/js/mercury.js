export default class Mercury {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = 0;
    this.mercuryQtn = 0.24;
  }

  mercuryAgeCalc() {
    this.mercuryAge = Math.round(this.earthAge / 0.24);
  }

  differenceCalc(Earth) {
    this.ageRemainder = Math.round(Math.abs(Earth - this.mercuryAge));
  }
} 