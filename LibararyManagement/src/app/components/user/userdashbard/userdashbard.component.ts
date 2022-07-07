import { Component, OnInit, ViewChild } from '@angular/core';

import { ApiService } from 'src/app/service/api.service';
import { CartService } from './../../../service/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-userdashbard',
  templateUrl: './userdashbard.component.html',
  styleUrls: ['./userdashbard.component.css']
})
export class UserdashbardComponent implements OnInit {
  
  displayedColumns: string[] = ['btitle', 'bcatag', 'bcopies', 'byear','bauthor', 'action'];
  dataSource!: MatTableDataSource<any>;
  public productList : any;
  public totaltem : number = 0;
  hidden = false;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog : MatDialog, private api : ApiService , private CartService : CartService) { } 
  
  getAllBooks(){
    this.api.getBooks()
    .subscribe({
      next:(res)=>{
        console.log("Rendering data",res)
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },error:(err)=>{
        alert("Error while fetching the Records")
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addtoCart(id : number ){
       this.api.SpecificBook(id)
       .subscribe({
        next : (res)=>{
          console.log("Data is ",res)
          // this.totaltem = res.length
          // console.log("Blender",this.totaltem)
          //this.getAllBooks();
          this.CartService.addtocart(res)
        }, error : ()=>{
          alert("Error while Adding the Record")
        }
      })
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  ngOnInit(): void {
    this.getAllBooks();
  }

}
