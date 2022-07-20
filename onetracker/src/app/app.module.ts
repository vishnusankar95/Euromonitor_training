import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdmindashboardComponent } from './features/admindashboard/admindashboard.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DialogComponent } from './features/dialog/dialog.component';
import { HomeComponent } from './shared/components/home/home.component';
import { HomeNavComponent } from './shared/components/navbar/home-nav/home-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './shared/components/login/login.component';
import { LogoutnavComponent } from './shared/components/navbar/logoutnav/logoutnav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatNativeDateModule} from '@angular/material/core'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { SignupComponent } from './shared/components/signup/signup.component';
import { UserdashboardComponent } from './features/userdashboard/userdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeNavComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    LogoutnavComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatProgressBarModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
