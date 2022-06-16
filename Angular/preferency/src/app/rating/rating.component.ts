import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges {
  @Input() rating:number;
  skillrating:string='';
  constructor() { }

  ngOnChanges(): void {
    if(this.rating===3){
      this.skillrating='Good'
    }
    else if(this.rating===4){
      this.skillrating='Very Good'
    }
    else if(this.rating===5){
      this.skillrating='Excellent';
    }
    else{
      this.skillrating='Not specified rating';
    }
  }
  ngOnInit(): void {
  }

}
