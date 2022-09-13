import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, observable } from 'rxjs';
import { Login } from '../domain/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL : string ="http://localhost:8080/loginapi/login";

  constructor(private httpClient : HttpClient) { }
   
    verifyUser(login : Login): Observable<Login>{
      console.log("in  login service");
      console.log(login);
      
      return this.httpClient.post<Login>(this.baseURL,login);
      
    }

  }

