import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message : string = "Welcome to Data Binding"
  twoWay : string = "Two way we can bind "
  constructor() { }

  ngOnInit(): void {
  }
  public showdata() : void {
   alert("Event Binding")
  }


}
