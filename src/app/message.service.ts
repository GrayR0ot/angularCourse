import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: string[] = [];

  add(message: string): void {
    this.messages.push(message)
    setTimeout(() => {
      this.messages = this.messages.filter(x => x !== message)
    }, 3000)
  }
  clear(): void {
    this.messages = [];
  }
}
