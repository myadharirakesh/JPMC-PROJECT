import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(private service : UserService,private router:Router){}
  userId:any;
  userName:any;
  userEmail:any;
  userPassword:any;
  userMobile:any;user:any;
  msg:any;
  register(){
    this.user={
      userId:this.userId,
      userName:this.userName,
      userEmail:this.userEmail,
      userPassword:this.userPassword,
      userMobile:this.userMobile
    }
    this.service.reg(this.user).subscribe((res:any)=>{
      this.msg=res;
      // alert(this.msg)
      // this.router.navigateByUrl('/login')
      Swal.fire({
        title: 'Registration Successful!',
        text: this.msg,
        icon: 'success',
        confirmButtonText: 'OK'
      })
        this.router.navigateByUrl('/login');
      });
    }
  }

