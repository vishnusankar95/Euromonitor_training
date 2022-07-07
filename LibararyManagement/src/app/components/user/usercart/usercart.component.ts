import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {
  longText = `You Can have a Maximum of 3 books . You Should return it on time.`;
  constructor() { }

  ngOnInit(): void {
  }

}
