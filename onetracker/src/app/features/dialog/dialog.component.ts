import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'

import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  ticketForm: any = UntypedFormGroup
  constructor(private formBuilder: UntypedFormBuilder, private api:ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any, private dialogRef : MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.ticketForm = this.formBuilder.group({
      ticketId : ['',Validators.required],
      department : ['',Validators.required],
      category : ['',Validators.required],
      sub_caterogy : ['',Validators.required],
      customer : ['',Validators.required],
      status : ['',Validators.required],
      issueDate : ['',Validators.required]
    })

    if(this.editData){
      this.ticketForm.controls['ticketId'].setValue(this.editData.ticketId);
      this.ticketForm.controls['department'].setValue(this.editData.department);
      this.ticketForm.controls['category'].setValue(this.editData.category);
      this.ticketForm.controls['sub_caterogy'].setValue(this.editData.sub_caterogy);
      this.ticketForm.controls['customer'].setValue(this.editData.customer);
      this.ticketForm.controls['status'].setValue(this.editData.status);
      this.ticketForm.controls['issueDate'].setValue(this.editData.issueDate);
    }
  }

  addTicket(){
    if(!this.editData){
      if(this.ticketForm.valid){
        this.api.postTicket(this.ticketForm.value)
        .subscribe({
          next:(res)=>{
            alert("Ticket Added Sucessfully")
            this.ticketForm.reset();
            this.dialogRef.close('save')
          },
          error:()=>{
            alert("Ticket not added !")
          }
        })
      }
    }else{
      this.updateTicket()
    }
  
  }

  updateTicket(){
    this.api.updateTicket(this.ticketForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Updated Sucessfully")
        this.ticketForm.reset();
        this.dialogRef.close('update');
      },error:()=>{
        alert("Ticket Not Updated  !")
      }
    })
  }
   
}
