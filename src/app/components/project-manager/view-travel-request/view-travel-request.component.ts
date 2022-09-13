import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDetails } from 'src/app/domain/employee-details';
import { Login } from 'src/app/domain/login';
import { RequestDetails } from 'src/app/domain/request-details';
import { EmployeeDetailsService } from 'src/app/services/employee-details.service';
import { RequestDetailsService } from 'src/app/services/request-details.service';

@Component({
  selector: 'app-view-travel-request',
  templateUrl: './view-travel-request.component.html',
  styleUrls: ['./view-travel-request.component.css']
})
export class ViewTravelRequestComponent implements OnInit {
  login : Login= new Login();
  requestDetails : RequestDetails = new RequestDetails();
  viewTravelRequest :  RequestDetails[] = [];
  employeeDetails : EmployeeDetails = new EmployeeDetails();
 
  
  constructor( private requestDetailsService : RequestDetailsService,
    private  employeeDetailsService: EmployeeDetailsService,
    private router:Router) { }

  ngOnInit(): void {
    this.login = JSON.parse(sessionStorage.getItem('login') || '{}');
    this.employeeDetailsService.getEmployeeByLoginId(this.login.loginId).subscribe(
      data => {
        this.employeeDetails = data;
        console.log(this.employeeDetails);
        this.getPendingRequest(this.employeeDetails.employeeId);
       
      }
    );
  }

  getPendingRequest(employeeId : number){
    this.requestDetailsService.viewManagerRequest(employeeId).subscribe(
      data =>{
        this.viewTravelRequest = data;
        console.log(this.viewTravelRequest);
        
      }
    );
  }
  updateStatus(requestDetails:RequestDetails){
    console.log(requestDetails);
    
    this.requestDetailsService.updateRequestStatus(requestDetails).subscribe(
      data => {
       
      this.requestDetails= data;
      console.log(this.requestDetails);
      this.getPendingRequest(this.employeeDetails.employeeId);

      }
    );
  }
  
  backToHomePage(){
    console.log("back to home")
    if (this.login.designation === 'Manager') {
      this.router.navigate(['projectmanagerpage']);

    }
    else if (this.login.designation === 'Sr.Developer') {
      this.router.navigate(['employee']);
    }
    else if (this.login.designation === 'Jr.Developer') {
      this.router.navigate(['employee']);
    } else if (this.login.designation === 'Team Lead') {
      this.router.navigate(['employee']);
    }

  }

  approve(requestDetails:RequestDetails){
    console.log(requestDetails);
    requestDetails.status ="Approved by manager"
    
    this.updateStatus(requestDetails);
 

  }
  reject(requestDetails:RequestDetails){
  requestDetails.status ="Rejected by manager"
  this.updateStatus(requestDetails);
  }

}
