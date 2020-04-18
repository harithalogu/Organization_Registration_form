import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { OtpComponent } from './otp/otp.component';
import { SuccessComponent } from './success/success.component';


const routes: Routes = [
  {    path: '',    component:PersonaldetailsComponent  },
  {    path: 'personaldetails',    component:PersonaldetailsComponent  },
  {    path: 'companydetails',    component:CompanydetailsComponent  },
  {    path: 'otp',    component:OtpComponent  },
  {    path: 'success',    component:SuccessComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
