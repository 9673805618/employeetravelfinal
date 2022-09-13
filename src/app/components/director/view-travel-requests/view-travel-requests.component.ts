import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDetails } from 'src/app/domain/employee-details';

import { Login } from 'src/app/domain/login';
import { RequestDetails } from 'src/app/domain/request-details';
import { EmployeeDetailsService } from 'src/app/services/employee-details.service';
import { RequestDetailsService } from 'src/app/services/request-details.service';

@Component({
  selector: 'app-view-travel-requests',
  templateUrl: './view-travel-requests.component.html',
  styleUrls: ['./view-travel-requests.component.css']
})
export class ViewTravelRequestsComponent implements OnInit {
  requestDetails: RequestDetails=new RequestDetails();
  login:Login=new Login();
  employeeDetails:EmployeeDetails=new EmployeeDetails();
  viewAllDirectorApprovedRequest: RequestDetails[]=[];
  viewManagerSendRequest: RequestDetails[]=[];


  constructor(private router:Router,
    private requestDetailsService:RequestDetailsService,
    private employeeDetailsService:EmployeeDetailsService
   ) { }

  ngOnInit(): void {

    this.login = JSON.parse(sessionStorage.getItem('login') || '{}');
    this.employeeDetailsService.getEmployeeByLoginId(this.login.loginId).subscribe(
      data => {
        this.employeeDetails = data;
        console.log(this.employeeDetails);
        this.getAllDirectorApprovedRequest();
        this.getManagerSendTravelRequest();
       
      }
    );
   
      }

    
  
  getAllDirectorApprovedRequest(){
    console.log("in getAllDirectorApprovedRequest()");
    
    this.requestDetailsService.viewDirectorRequest(this.requestDetails).subscribe(
      data => {
        this.viewAllDirectorApprovedRequest = data;
        console.log(this.viewAllDirectorApprovedRequest);
        
      }
    );

  }

  updateStatus(requestDetails:RequestDetails){
    console.log(requestDetails);
    
    this.requestDetailsService.updateRequestStatus(requestDetails).subscribe(
      data => {
       
      this.requestDetails= data;
      console.log(this.requestDetails);
      this.getAllDirectorApprovedRequest()
      this.getManagerSendTravelRequest();
   

      }
    );
  }
  approve(requestDetails:RequestDetails){
    console.log(requestDetails);
    requestDetails.status ="Approved by Director"
    
    this.updateStatus(requestDetails);
 

  }
  reject(requestDetails:RequestDetails){
  requestDetails.status ="Rejected by Director"
    this.updateStatus(requestDetails);
  }

  getManagerSendTravelRequest(){
    console.log("in getAllDirectorApprovedRequest()");
    
    this.requestDetailsService.viewManagerAddRequest(this.requestDetails).subscribe(
      data => {
        this.viewManagerSendRequest = data;
        console.log(this.viewManagerSendRequest);

  }
    );
}
  backToHomePage() {
    console.log("back to home")
    console.log(this.login.designation);
    
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
    } else if (this.login.designation === 'Travel Agent') {
      this.router.navigate(['travelagentpage']);
    }else if(this.login.designation ==='Director'){
      this.router.navigate(['directorpage']);
    }

  }

}
