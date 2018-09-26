export class Message {
  name: string;
  avatar: string;
  content: string;
  timestamp: Date;
  isSender: boolean;


  constructor(name: string, content: string, avatar: string, timestamp?: Date, isSender?: boolean) {
    this.name = name;
    this.content = content;
    this.timestamp = timestamp;
    this.avatar = avatar;
    this.isSender = isSender;
  }
}
