export default class Earth {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
    this.ageExpect = this.lifeExptCalc();
  }

  lifeExptCalc(age) {/*istanbul ignore else*/
    if (this.gender === "male") {
      age =  79;
    } else if (this.gender === "female") {
      age = 81;
    } else {
      return 'choose a biological gender';
    } return age;
  }

  lifeExpectancy(planetAge) {
    return this.ageExpect / planetAge;
  }
}
