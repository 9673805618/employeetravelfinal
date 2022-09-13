import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetails } from 'src/app/domain/employee-details';
import { Login } from 'src/app/domain/login';
import { RequestDetails } from 'src/app/domain/request-details';
import { EmployeeDetailsService } from 'src/app/services/employee-details.service';
import { RequestDetailsService } from 'src/app/services/request-details.service';

@Component({
  selector: 'app-view-upcoming-travel-request',
  templateUrl: './view-upcoming-travel-request.component.html',
  styleUrls: ['./view-upcoming-travel-request.component.css']
})
export class ViewUpcomingTravelRequestComponent implements OnInit {
  login: Login = new Login();
  requestDetails: RequestDetails = new RequestDetails();
  viewUpcomingTravelRequest: RequestDetails[] = [];
  employeeDetails: EmployeeDetails = new EmployeeDetails();
  checkSlabStatus: boolean = false;
  slabStatus: string = " slab status pending";
  viewTravelAgentApprovedRequest: RequestDetails[] =[];
  ViewDirectorRequest : RequestDetails[] =[];

  constructor(
    private requestDetailsService: RequestDetailsService,
    private employeeDetailsService: EmployeeDetailsService,
    private activatedRoute : ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.login = JSON.parse(sessionStorage.getItem('login') || '{}');
    this.employeeDetailsService.getEmployeeByLoginId(this.login.loginId).subscribe(
      data => {
        this.employeeDetails = data;
        console.log(this.employeeDetails);
        this.getUpcomingTravelRequest();
        this.getAgentApprovedRequest();
        this.getDirectorApprovedRequest();

      }

    );
  }

  getUpcomingTravelRequest() {
    this.requestDetailsService.viewTravelAgentRequest(this.requestDetails).subscribe(
      data => {
        this.viewUpcomingTravelRequest = data;
        console.log(this.viewUpcomingTravelRequest);
        this.getAgentApprovedRequest();
      }
    );
  }


  backToHomePage() {
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
    } else if (this.login.designation === 'Travel Agent') {
      this.router.navigate(['travelagentpage']);
    }

  }
  updateStatus(requestDetails: RequestDetails) {
    console.log(requestDetails);

    this.requestDetailsService.updateRequestStatus(requestDetails).subscribe(
      data => {

        this.requestDetails = data;
        console.log(this.requestDetails);
        this.getUpcomingTravelRequest();


      }
    );
  }
  approve(requestDetails: RequestDetails) {
    console.log(requestDetails);
    requestDetails.status = "Approved by Travel Agent";

    this.updateStatus(requestDetails);


  }
  reject(requestDetails: RequestDetails) {
    requestDetails.status = "Rejected by Travel Agent";
    this.updateStatus(requestDetails);
  }
  updateSlabStatus(requestId: number) {
    this.requestDetailsService.validateSlab(requestId).subscribe(
      data => {
        this.checkSlabStatus = data;
        console.log(this.checkSlabStatus);
        if (this.checkSlabStatus) {
          alert("slab validated successfully");

        } else {
          alert("slab validation failed");
        }
      }
    );
  }

  checkSlab(requestId: number) {
    this.updateSlabStatus(requestId);
  }

  getAgentApprovedRequest(){
    this.requestDetailsService.viewTravelAgentApprovedRequest(this.requestDetails).subscribe(
      data => {
        this.viewTravelAgentApprovedRequest = data;
        console.log(this.viewTravelAgentApprovedRequest);

      }
    );
  }
  bookDetails(requestId:number){
    this.router.navigate(['addbookingdetails',requestId]);
   
  }

  getDirectorApprovedRequest(){
    this.requestDetailsService.viewDirectorApprovedRequest(this.requestDetails).subscribe(
      data =>{
        this.ViewDirectorRequest = data;
        console.log(this.ViewDirectorRequest);
        
      }
    );

  }

}
