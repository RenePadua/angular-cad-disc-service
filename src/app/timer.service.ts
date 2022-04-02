import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  private timer: any;
  private counter = 0;

  constructor() {}

 
  startCounter(tempo: string) {
    if (!this.timer && tempo != '' && tempo != '0') {
      let interval = parseInt(tempo);
      this.timer = setInterval(() => {
        this.counter++;
      }, interval);
    }
  }

  stopCounter() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  resetCounter() {
    this.stopCounter();
    this.counter = 0;
  }

  getCounter() {
    return this.counter;
  }
}