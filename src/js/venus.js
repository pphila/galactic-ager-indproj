export default class Venus {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.venusAge = 0;
    this.venusQtn = 0.62;
  }

  venusCalc() {
    this.venusAge = Math.round(this.earthAge / 0.62);
  }

  differenceCalc(Earth) {
    this.ageRemainder = Math.round(Math.abs(Earth - this.venusAge));
  }
}