import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employee:Employee[] | undefined;
 constructor(private empService:EmployeeService){}

  ngOnInit(): void {
    this.empService.getEmployees().subscribe(response=>this.employee=response);
  }
  
  
}
