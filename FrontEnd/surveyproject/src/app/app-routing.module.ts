import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { FormsComponent } from './forms/forms.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';


const routes: Routes = [
  {path:'',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdmindashboardComponent},
  {path:'forms',component:FormsComponent},
  {path:'user',component:UserdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
