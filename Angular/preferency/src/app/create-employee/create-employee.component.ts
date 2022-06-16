import { Component, OnInit, Output } from '@angular/core';

import {Employee} from '../employee'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @Output() addemployeeRecord:EventEmitter<Employee>=new EventEmitter<Employee>();
  employee : Employee;
  constructor() {
    this.employee = new Employee();
   }

  ngOnInit(): void {
  }

  public addEmployee(){
    const data={
      employeeId:this.employee.employeeId,
      employeeName:this.employee.employeeName,
      projectId:this.employee.projectId,
      angularProficiency:this.employee.angularProficiency
    };
console.log(data)
    this.addemployeeRecord.emit(data)
  }

}
