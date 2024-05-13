export default class Performance {
  constructor(user) {
    this.id = user.data.userId;
    this.kind = user.data.kind;
    this.data = user.data.data;
  }
}
