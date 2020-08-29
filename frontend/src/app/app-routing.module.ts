import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register.component'
import {LoginComponent} from './login.components'
import { from } from 'rxjs';
import { NewDBComponent } from './newbm.component';
import {UpdateComponent} from './update.component'
import {ListComponent} from './list.component'
import { TableComponent } from './table.component';

const routes: Routes = [
  {
    path:'register' , component: RegisterComponent
  },
  {
    path:'login' , component: LoginComponent
  },
  {
    path:'new',component:NewDBComponent
  },
  {
    path:'list',component:ListComponent
  },
  {
    path:'update/:id',component:UpdateComponent
  },
  {
    path:'table',component:TableComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
