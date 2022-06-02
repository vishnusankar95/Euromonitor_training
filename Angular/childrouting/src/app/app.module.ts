import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CeoComponent } from './components/ceo/ceo.component';
import { CtoComponent } from './components/cto/cto.component';
import { DepartmentComponent } from './components/department/department.component';
import { DirectorComponent } from './components/director/director.component';
import { HeadofseComponent } from './components/headofse/headofse.component';
import { NgModule } from '@angular/core';
import { Se1Component } from './components/se1/se1.component';
import { Se2Component } from './components/se2/se2.component';
import { Se3Component } from './components/se3/se3.component';
import { SemanagerComponent } from './components/semanager/semanager.component';
import { SseComponent } from './components/sse/sse.component';
import { TechleadComponent } from './components/techlead/techlead.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    TechnologyComponent,
    CeoComponent,
    CtoComponent,
    DirectorComponent,
    HeadofseComponent,
    SemanagerComponent,
    TechleadComponent,
    Se1Component,
    Se2Component,
    Se3Component,
    SseComponent,
    HeadofseComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
