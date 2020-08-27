import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
    fadeInUpOnEnterAnimation({ anchor: 'enter2', duration: 1000, delay: 1500, translate: '30px' })
]})

export class HomeComponent implements OnInit {

  picModal = false;
  modal = false;
  modal2 = false;
  @Output() close = new EventEmitter<void>()

  constructor() {
  }

  ngOnInit(): void {
    this.modal = true;
    this.modal2 = true;
  }

  showModal() {
    this.picModal = true;
  }
  onHandleAlert() {
    this.picModal = false;
  }

}
