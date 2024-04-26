export default class AverageSessions {
  constructor(user) {
    this.id = user.data.userId;
    this.sessions = user.data.sessions;
  }
}
