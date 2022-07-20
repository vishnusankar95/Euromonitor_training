import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  addBooks(data : any){
    return this.http.post<any>("http://localhost:8000/booksData/",data)
  }

  getBooks(){
    return this.http.get<any>("http://localhost:8000/booksData/");
  }

  putBooks(data:any, id : number){
    return this.http.put<any>("http://localhost:8000/booksData/"+id,data)
  }

  deleteBooks(id:number){
    return this.http.delete<any>("http://localhost:8000/booksData/"+id)
  }

  SpecificBook(id: number){
    return this.http.get<any>("http://localhost:8000/booksData/"+id);
  }
}
