import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDetails } from 'src/app/domain/employee-details';
import { Login } from 'src/app/domain/login';
import { RequestDetails } from 'src/app/domain/request-details';
import { EmployeeDetailsService } from 'src/app/services/employee-details.service';
import { RequestDetailsService } from 'src/app/services/request-details.service';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {
  requestDetails: RequestDetails = new RequestDetails();
  result: boolean = false;
  submitted: boolean = false;
  employeeDetails: EmployeeDetails = new EmployeeDetails();
  login: Login = new Login;


  constructor(private requestDetailsService: RequestDetailsService,
    private employeeDetailsService: EmployeeDetailsService,
    private router: Router) { }

  ngOnInit(): void {
    this.login = JSON.parse(sessionStorage.getItem('login') || '{}');
    this.employeeDetailsService.getEmployeeByLoginId(this.login.loginId).subscribe(
      data => {
        this.employeeDetails = data;
        console.log(this.employeeDetails);
        this.requestDetails.employeeDetails = this.employeeDetails;
        //this.addRequest(this.employeeDetails.employeeId)
      }
    );


  }
  addRequest() {

    console.log("in addNewRequest()");
    this.requestDetails.documentsDetails.documentId = 1;
    console.log(this.requestDetails);

    this.requestDetailsService.addRequest(this.requestDetails).subscribe(
      data => {
        this.result = data;
        console.log(this.result);
        this.submitted = true;
                                                                                                                                                                  
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

}
