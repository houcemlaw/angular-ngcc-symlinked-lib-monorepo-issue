import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-myLib',
  template: `
    <p>
      my-lib works!
    </p>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
