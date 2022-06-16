import { Employee } from './employee';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private url ='/assets/employee.json';

  constructor(private httpClient:HttpClient) { }

  public getEmployees():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.url)
  }
}
