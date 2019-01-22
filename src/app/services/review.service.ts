import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  httpOptions;
  constructor(private http:HttpClient) {
   
   }

  getReviews(token):Observable<Object>
  {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ token
      })
    }
    return this.http.get("http://localhost:8896/secured-api/reviews",this.httpOptions);
  }
}
