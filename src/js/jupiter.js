export default class Jupiter {
  constructor(earthAge) {
    this.earthAge = earthAge
    this.jupiterAge = 0;
  }

  jupiterCalc() {
    this.jupiterAge = Math.round(this.earthAge / 11.86);
  }
}