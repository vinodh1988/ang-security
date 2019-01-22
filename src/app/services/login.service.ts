import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
httpOptions;
username:string;
password:string;
  constructor(private http:HttpClient) {
   
  }

  logMethod(data,dataobj):Observable<Object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Authorization': "Basic "+btoa(dataobj.username+":"+dataobj.password)
      })
   }
    console.log(this.httpOptions);
    this.username=data.username;
    this.password=data.password;
    return this.http.post("http://localhost:8896/authorize/jwt",data,this.httpOptions);
  }
}
