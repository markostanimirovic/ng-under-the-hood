import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="onIncrement()">+</button>
    <span>{{ count$ | zoneLessAsync }}</span>
    <button (click)="onDecrement()">-</button>
  `,
})
export class CounterComponent {
  private readonly count = new BehaviorSubject(0);
  readonly count$ = this.count.asObservable();

  onIncrement(): void {
    this.count.next(this.count.value + 1);
  }

  onDecrement(): void {
    this.count.next(this.count.value - 1);
  }
}
