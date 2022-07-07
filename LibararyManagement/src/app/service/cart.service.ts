import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  public cartItemList : any = []
  public bookList = new BehaviorSubject<any>([]);

  constructor() { }
  getbooks(){
    return this.bookList.asObservable();
  }

  setbooks(book : any){
    if(this.cartItemList.length<3){
      this.cartItemList.push(...book);
      this.bookList.next(book)
    }
    else if(this.cartItemList.length>=3){
      alert("you exceed the limit of book request")
    }
  }

  addtocart(book:any){
    if(this.cartItemList.length<3){
    this.cartItemList.push(book);
    this.bookList.next(this.cartItemList)
    return this.cartItemList
    // this.getTotal();
    // console.log("CartList",this.cartItemList)
    }
    else if(this.cartItemList.length>=3){
      alert("you exceed the limit of book request")
    }
  }

  getTotal(){
    let count = 0;
    this.cartItemList.map((a:any)=>{
     count += a.total;
    }
  )}

  returnbook(book : any){
    this.cartItemList.map((a:any, index : any)=>{
      if(book.id === a.id){
        this.cartItemList.splice(index,1)
      }
    })
  }

  returnAllbook(book : any){
    this.cartItemList =[];
    this.bookList.next(this.cartItemList)
     
  }
}
