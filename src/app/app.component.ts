import {Component} from '@angular/core';
import {Message} from './models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public message: Message;
  public messages: Message[];


  constructor() {
    this.message = new Message('', '', 'assets/images/avatar.png');
    this.messages = [
      new Message('Bot', 'Welcome to chatbot universe', 'assets/images/bot.png', new Date(), false)
    ];
  }
}
