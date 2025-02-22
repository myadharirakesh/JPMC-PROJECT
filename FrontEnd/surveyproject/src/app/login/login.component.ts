import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private service: UserService, private router: Router) { }
  loginusername: any;
  loginuserpassword: any;
  user: any;
  msg:any;
  login() {
    this.user = {
        userName:this.loginusername,
        userPassword:this.loginuserpassword
    }
    this.service.login(this.user).subscribe((res:any)=>{
      this.msg=res;
     
      Swal.fire({
        title: 'Login  Successful!',
        text: this.msg,
        icon: 'success',
        confirmButtonText: 'OK'
      })
      this.router.navigateByUrl('/admin')
    })
  }
}

