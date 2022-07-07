import { Component, OnInit, ViewChild } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

import { ApiService } from './../../../service/api.service';
import { DialogComponent } from './../dialog/dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
 
  displayedColumns: string[] = ['btitle', 'bcatag', 'bcopies', 'byear','bauthor', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog : MatDialog, private api : ApiService) { } 

  openDialog() {
    this.dialog.open(DialogComponent, {
     width:'35%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllBooks();
      }
    })
  }

  getAllBooks(){
    this.api.getBooks()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },error:(err)=>{
        alert("Error while fetching the Records")
      }
    })
  }

  editBooks(row : any){
    this.dialog.open(DialogComponent,{
      width:'35%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getAllBooks();
      }
    })
  }

  deleteBooks(id:number){
    this.api.deleteBooks(id)
    .subscribe({
      next : (res)=>{
        alert("Deleted Successfully ")
        this.getAllBooks();
      }, error : ()=>{
        alert("Error while Deleting the Record")
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


  ngOnInit(): void {
    this.getAllBooks();
  }

}
