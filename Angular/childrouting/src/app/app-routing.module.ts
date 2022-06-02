import { RouterModule, Routes } from '@angular/router';

import { CeoComponent } from './components/ceo/ceo.component';
import { CtoComponent } from './components/cto/cto.component';
import { DepartmentComponent } from './components/department/department.component';
import { DirectorComponent } from './components/director/director.component';
import { HeadofseComponent } from './components/headofse/headofse.component';
import { HomeComponent } from './../../../sampleProject/src/app/home/home.component';
import { NgModule } from '@angular/core';
import { Se1Component } from './components/se1/se1.component';
import { Se2Component } from './components/se2/se2.component';
import { Se3Component } from './components/se3/se3.component';
import { SemanagerComponent } from './components/semanager/semanager.component';
import { SseComponent } from './components/sse/sse.component';
import { TechleadComponent } from './components/techlead/techlead.component';
import { TechnologyComponent } from './components/technology/technology.component';

const routes: Routes = [
  // {path:"home",component:HomeComponent},
  {path:"department",component:DepartmentComponent,children:[
    {path:'technology',component:TechnologyComponent,children:[
      {path:'ceo',component:CeoComponent,children:[
        {path:'cto',component:CtoComponent,children:[
          {path:'director',component:DirectorComponent,children:[
            {path:'headofse',component:HeadofseComponent,children:[
              {path:'semanager',component:SemanagerComponent,children:[
                {path:'techlead',component:TechleadComponent,children:[
                  {path:'sse',component:SseComponent,children:[
                    {path:'se1',component:Se1Component},
                    {path:'se2',component:Se2Component},
                    {path:'se3',component:Se3Component}
                  ]}
                ]}
              ]}
            ]}
          ]}
        ]}
      ]}
    ]}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
