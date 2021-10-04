import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;

  constructor(private activatedRoutes: ActivatedRoute) {
    this.activatedRoutes.queryParams.subscribe((params) => {
      console.log(params);
    });
  }
}
