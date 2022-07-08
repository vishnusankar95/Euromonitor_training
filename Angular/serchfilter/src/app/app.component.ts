import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'serchfilter';
  search!: string;
  userData=[
    {
      id:1,
      name:"Akash",
      email:"akash@mail.com",
      phone:95989774123
    },
    {
      id:2,
      name:"Nikhil",
      email:"Nikhil@mail.com",
      phone:96354778952
    },
    {
      id:3,
      name:"Shivam",
      email:"shivam@mail.com",
      phone:9856321470
    },
    {
      id:4,
      name:"Aniket",
      email:"Aniket@mail.com",
      phone:9658741236
    },
    {
      id:5,
      name:"Ramhu",
      email:"rambhu@mail.com",
      phone:8874562103
    },
    {
      id:6,
      name:"Vishnu",
      email:"vishnu@mail.com",
      phone:7561018727
    },
    {
      id:7,
      name:"Sudhin",
      email:"sudhin@mail.com",
      phone:7756410258
    },
    {
      id:8,
      name:"Satya",
      email:"satya@mail.com",
      phone:96789454123
    },
    {
      id:9,
      name:"Chacko",
      email:"chacko@mail.com",
      phone:9895226851
    },
    {
      id:10,
      name:"Biju",
      email:"biju@mail.com",
      phone:8547363431
    },

  ]
}
