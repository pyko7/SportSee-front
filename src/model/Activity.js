export default class Activity {
  constructor(user) {
    this.id = user.data.userId;
    this.sessions = user.data.sessions;
  }
}
