import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingDetails } from 'src/app/domain/booking-details';
import { EmployeeDetails } from 'src/app/domain/employee-details';
import { Login } from 'src/app/domain/login';
import { RequestDetails } from 'src/app/domain/request-details';
import { EmployeeDetailsService } from 'src/app/services/employee-details.service';
import { RequestDetailsService } from 'src/app/services/request-details.service';

@Component({
  selector: 'app-view-existing-request',
  templateUrl: './view-existing-request.component.html',
  styleUrls: ['./view-existing-request.component.css']
})
export class ViewExistingRequestComponent implements OnInit {
  
  login: Login = new Login();
  viewExistingRequest: RequestDetails[] = [];
  result: boolean = false;
  employeeDetails: EmployeeDetails = new EmployeeDetails;


  constructor(private requestDetailsService: RequestDetailsService, private employeeDetailsService: EmployeeDetailsService,
    private router: Router) { }

  ngOnInit(): void {
    this.login = JSON.parse(sessionStorage.getItem('login') || '{}');
    this.employeeDetailsService.getEmployeeByLoginId(this.login.loginId).subscribe(
      data => {
        this.employeeDetails = data;
        console.log(this.employeeDetails);
        this.getExistingRequest(this.employeeDetails.employeeId);
      }
    );
    
  }
  getExistingRequest(employeeId: number) {
    this.requestDetailsService.viewAllRequest(employeeId).subscribe(
      data => {
        this.viewExistingRequest = data;
        console.log(this.viewExistingRequest);

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
    }

  }
  
  viewBookingDetails(requestId :number){

 
      this.router.navigate(['viewbookingdetails',requestId]);
    }

      
     
    
  


}