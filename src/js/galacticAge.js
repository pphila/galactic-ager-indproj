export default class Earth {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
    this.ageExpect = this.lifeExptCalc();
  }

  lifeExptCalc(age) {
    if (this.gender === "male") {
      age = 79;
    } return age; 
  }
}
