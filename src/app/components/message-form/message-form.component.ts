import {Component, OnInit, Input} from '@angular/core';
import {Message} from '../../models/message';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {
  @Input()
  public message: Message;
  @Input()
  private messages: Message[];

  ngOnInit() {
  }

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.message.name = 'User';
    this.message.isSender = true;
    this.messages.push(this.message);
    this.message = new Message('', '', 'assets/images/avatar.png');
    const objDiv = document.getElementById('chatRoom');
    objDiv.scrollTop = objDiv.scrollHeight;
  }
}
