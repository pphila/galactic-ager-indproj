export default class Venus {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.venusAge = 0;
  }

  venusCalc() {
    this.venusAge = Math.round(this.earthAge / 0.62);
  }
}