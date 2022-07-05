import { Component, OnInit } from '@angular/core';

interface daysfilter {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-home-tracker',
  templateUrl: './home-tracker.component.html',
  styleUrls: ['./home-tracker.component.css']
})

export class HomeTrackerComponent implements OnInit {
  selectedValue?: string ;
  constructor() { }

  daysFilters: daysfilter[] = [
    {value: 'Last 3 days', viewValue: '3days'},
    {value: 'Last 2 Days', viewValue: '2days'},
    {value: 'Latest', viewValue: 'Latest'},
  ];

  
  ngOnInit(): void {
  }
}
