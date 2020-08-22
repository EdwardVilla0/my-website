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
    fadeInUpOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 1500, translate: '30px' })

  ]
  
})
export class HomeComponent implements OnInit {

  modal = false;

  constructor() {
    
  }

  ngOnInit(): void {
    this.modal = true;
  }

  showModal() {
    console.log('testing');
    //this.modal = true;
  }
}
