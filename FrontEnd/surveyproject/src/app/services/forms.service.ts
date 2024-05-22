import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http:HttpClient) { }

  saveFormData(a:any){
    return this.http.post('http://localhost:4300/saveFormData',a,{responseType:'text'});
  }
}