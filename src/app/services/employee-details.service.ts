
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDetails } from '../domain/employee-details';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {
  private baseURL :string = "http://localhost:8080/empdetailsApi/empdetails";

  constructor(private httpClient : HttpClient) { }

  getEmployeeByLoginId(loginId: number): Observable<EmployeeDetails> {
    console.log("in getEmployeeByLoginId()");  
    return this.httpClient.get<EmployeeDetails>(this.baseURL + '/' + loginId);
  }
}
