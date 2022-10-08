export default class Jupiter {
  constructor(earthAge) {
    this.earthAge = earthAge
    this.jupiterAge = 0;
    this.jupiterQtn = 11.86
  }

  jupiterCalc() {
    this.jupiterAge = Math.round(this.earthAge / 11.86);
  }

  differenceCalc(Earth) {
    this.ageRemainder = Math.round(Math.abs(Earth - this.jupiterAge))
  };
}