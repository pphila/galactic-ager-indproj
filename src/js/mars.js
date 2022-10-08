export default class Mars {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.marsAge = 0;
  }

  marsCalc() {
    this.marsAge = Math.round(this.earthAge / 1.88);
  }
}