import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postTicket(ticket : any){
    return this.http.post<any>("http://localhost:8000/ticketList/",ticket)
  }

  getTicket(){
    return this.http.get<any>("http://localhost:8000/ticketList/")
  }

  updateTicket (data:any, id:number){
    return this.http.put<any>("http://localhost:8000/ticketList/"+id, data)
  }

  deleteTicket(id:number){
    return this.http.delete<any>("http://localhost:8000/ticketList/"+id)
  }
}
