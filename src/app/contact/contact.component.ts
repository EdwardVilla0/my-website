import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    console.log(window.location.href)
    window.location.href = "mailto:eduardovillasenor1992@gmail.com"
  }
 
}
