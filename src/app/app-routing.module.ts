import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTheatreComponent } from './admin/add-theatre/add-theatre.component';
import { AdminComponent } from './admin/admin/admin.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CustomerComponent } from './customer/customer/customer.component';


const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'theatre',
    component: AddTheatreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
