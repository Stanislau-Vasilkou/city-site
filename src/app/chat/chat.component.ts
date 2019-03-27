import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {
  store: string[] = [];
  greeting: string;
  constructor() {

  }

  ngOnInit() {
    setTimeout(() => this.greeting = 'Здравствуйте! Пишите мне, если у Вас возникнут вопросы по работе сайта.', 2000);
  }

  show(text: string) {
    if (text) {
      this.store.unshift(text);
    }
  }
}
