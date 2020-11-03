import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter</h1>
    <div>
      <button (click)="onIncrement()">+</button>
      <span>{{ count | zoneLessAsync }}</span>
      <button (click)="onDecrement()">-</button>
    </div>
  `,
})
export class CounterComponent {
  count = new BehaviorSubject(0);

  onIncrement(): void {
    this.count.next(this.count.value + 1);
  }

  onDecrement(): void {
    this.count.next(this.count.value - 1);
  }
}
