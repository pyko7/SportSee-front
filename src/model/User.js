export default class User {
  constructor(user) {
    this.id = user.data.id;
    this.firstName = user.data.userInfos.firstName;
    this.lastName = user.data.userInfos.lastName;
    this.age = user.data.userInfos.age;
    this.todayScore = user.data.todayScore || user.data.score;
    this.calorieCount = user.data.keyData.calorieCount;
    this.proteinCount = user.data.keyData.proteinCount;
    this.carbohydrateCount = user.data.keyData.carbohydrateCount;
    this.lipidCount = user.data.keyData.lipidCount;
  }
}
