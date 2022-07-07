import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from './../../../service/api.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  bookForm!: FormGroup;
  actionBtn : string = "Save";
  constructor(private formBuilder: FormBuilder, 
    private api : ApiService, 
    private dialogRef : MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData : any) {}

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      btitle: ['', Validators.required],
      bcatag: ['', Validators.required],
      bcopies: ['', Validators.required],
      bdate: ['', Validators.required],
      bauthor: ['', Validators.required],
    });

    if(this.editData){
      this.actionBtn = "Update";
      this.bookForm.controls['btitle'].setValue(this.editData.btitle)
      this.bookForm.controls['bcatag'].setValue(this.editData.bcatag)
      this.bookForm.controls['bcopies'].setValue(this.editData.bcopies)
      this.bookForm.controls['bdate'].setValue(this.editData.bdate)
      this.bookForm.controls['bauthor'].setValue(this.editData.bauthor)

    }
  }

  addBooks(){
   if(!this.editData){
    if(this.bookForm.valid){
      this.api.addBooks(this.bookForm.value)
      .subscribe({
        next : (res)=>{
          alert("product Added Sucessfully")
          this.bookForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error !! Book is not added")
        }
       
      })
    }
   }
   else{
    this.updateBooks()
   }
  }

  updateBooks(){
    this.api.putBooks(this.bookForm.value,this.editData.id)
    .subscribe({
      next : (res)=>{
        alert("Product Updated Sucessfully");
        this.bookForm.reset();
        this.dialogRef.close('update')
      },error : ()=>{
        alert("Error while Updating the Record")
      }
    })
  }
}
