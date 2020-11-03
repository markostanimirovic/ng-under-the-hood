import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Home Component</h1>
    <h3>{{ subtitle }}</h3>
  `,
})
export class HomeComponent {
  subtitle = 'Hello World';
}
