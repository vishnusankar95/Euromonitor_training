import { Component, OnInit } from '@angular/core';

import { MasterService } from 'src/app/service/master.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private service: MasterService) {}
  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.service.authenticateEmployee(form.value);
  }
}
