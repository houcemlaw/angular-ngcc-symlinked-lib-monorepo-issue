import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const packageInfo = require('../../../../../package.json');

@Component({
  selector: 'lib-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponentComponent implements OnInit {

  version = packageInfo.version;

  constructor() { }

  ngOnInit(): void {
  }

}
