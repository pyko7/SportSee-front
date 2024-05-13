import { formatDate } from "../utils/utils";

export default class Activity {
  constructor(user) {
    this.id = user.data.userId;
    this.sessions = user.data.sessions;
  }
  getFormattedSessions() {
    this.sessions.forEach((session) => {
      session["day"] = formatDate(session["day"]);
    });
    return this.sessions;
  }
}
