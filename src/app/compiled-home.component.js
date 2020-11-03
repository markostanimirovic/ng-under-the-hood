import {
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate,
} from '@angular/core';

class HomeComponent {
  constructor() {
    this.subtitle = 'Hello World';
  }
}

HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};

HomeComponent.ɵcmp = ɵɵdefineComponent({
  type: HomeComponent,
  selectors: [['app-home']],
  decls: 4,
  vars: 1,
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) { // ɵRenderFlags.Create
      ɵɵelementStart(0, 'h1'); // <h1>
      ɵɵtext(1, 'Home Component'); // Home Component
      ɵɵelementEnd(); // </h1>
      ɵɵelementStart(2, 'h3'); // <h3>
      ɵɵtext(3); // {{ subtitle }}
      ɵɵelementEnd(); // </h3>
    }
    if (rf & 2) { // ɵRenderFlags.Update
      ɵɵadvance(3); // advance three times to '{{ subtitle }}' node
      ɵɵtextInterpolate(ctx.subtitle); // update '{{ subtitle }}' value
    }
  },
  encapsulation: 2,
});
