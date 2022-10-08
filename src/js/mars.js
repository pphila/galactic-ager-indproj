export default class Mars {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.marsAge = 0;
    this.marsQtn = 1.88;
  }

  marsCalc() {
    this.marsAge = Math.round(this.earthAge / 1.88);
  }

  differenceCalc(Earth) {
    this.ageRemainder = Math.round(Math.abs(Earth - this.marsAge))
  }
}