import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  reg(user:any){
    return this.http.post('http://localhost:4500/users/reg',user,({responseType:'text'}))
  }
  login(user:any){
    return this.http.post('http://localhost:4500/users/login',user,({responseType:'text'}))
  }
}
