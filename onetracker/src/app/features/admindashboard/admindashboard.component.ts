import {AfterViewInit, ViewChild} from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { ApiService } from './../services/api.service';
import { DialogComponent } from './../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  displayedColumns: string[] = ['ticketId', 'department', 'category', 'sub_caterogy','customer','status','issueDate','action'];
  dataSource!: MatTableDataSource<any>;
  actionBtn : string = 'Save';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private api : ApiService) {}

  ngOnInit(): void {
    this.getAllTickets();
  }

   openDialog() {
    const dialogRef = this.dialog.open(DialogComponent,{
      width:'30%',
      height:'90vw'
    }).afterClosed().subscribe(res => {
      if(res === 'save'){
        this.getAllTickets();
      }
    });
  }

  getAllTickets(){
   this.api.getTicket()
   .subscribe({
    next:(res)=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    },
    error:(err)=>{
      alert("Something Went Wrong")
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

  editTicket(row : any){
    this.dialog.open(DialogComponent,{
      width:'30%',
      height:'90vw',
      data:row
    }).afterClosed().subscribe(res => {
      if(res === 'update'){
        this.getAllTickets();
      }
    });
  }

  deleteTicket(id : number){
    this.api.deleteTicket(id)
    .subscribe({
      next:(res)=>{
         alert("Deleted Sucessfully")
      }, error:()=>{
         alert("Delete is not Sucessfull !")
      }
    })
  }
}
