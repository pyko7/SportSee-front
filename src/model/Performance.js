export default class Performance {
  constructor(user) {
    this.id = user.data.userId;
    this.kind = user.data.kind;
    this.data = user.data.data;
    this.performance = this.buildPerformance();
  }
  buildPerformance() {
    this.data.forEach((el) => {
      this.performance[this.kind[el.kind]] = el;
    });
  }
}
