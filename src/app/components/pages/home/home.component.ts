import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showModal: boolean = false;
  constructor() {}

  ngOnInit(): void {}



  onHandleModal(){
    this.showModal = !this.showModal;
  }
}
