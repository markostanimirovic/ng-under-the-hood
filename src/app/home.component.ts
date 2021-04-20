import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Home</h1>
    <h2>{{ subtitle }}</h2>
  `,
})
export class HomeComponent {
  subtitle = 'Hello World!';
}
