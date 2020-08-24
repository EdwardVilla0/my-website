import { Component, OnInit } from '@angular/core';
import {
  fadeInOnEnterAnimation, fadeInUpOnEnterAnimation
} from 'angular-animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeInUpOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 500, translate: '30px' }),
    fadeInUpOnEnterAnimation({ anchor: 'enter2', duration: 1000, delay: 2000, translate: '30px' })
]})

export class HomeComponent implements OnInit {

  modal = false;
  modal2 = false;

  constructor() {
  }

  ngOnInit(): void {
    this.modal = true;
    this.modal2 = true;
  }

  showModal() {
    console.log('testing');
  }
}
