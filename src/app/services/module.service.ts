import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http:HttpClient) { }

  getModule(param:string):Observable<object>{
   return  this.http.get("http://localhost:8894/rest-api/modules/"+param);
  }
}
