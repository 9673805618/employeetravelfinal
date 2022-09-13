import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingDetails } from 'src/app/domain/booking-details';
import { EmployeeDetails } from 'src/app/domain/employee-details';
import { Login } from 'src/app/domain/login';
import { BookingDetailsService } from 'src/app/services/booking-details.service';
import { EmployeeDetailsService } from 'src/app/services/employee-details.service';

@Component({
  selector: 'app-view-booking-details',
  templateUrl: './view-booking-details.component.html',
  styleUrls: ['./view-booking-details.component.css']
})
export class ViewBookingDetailsComponent implements OnInit {
  requestId:number=0; 
  bookingDetails : BookingDetails = new BookingDetails();
  viewBookingDetailsById : BookingDetails []= [];
  login : Login = new Login();
  employeeDetails : EmployeeDetails = new EmployeeDetails();

  constructor(
    private router : Router, 
    private bookingDetailsService : BookingDetailsService,
    private employeeDetailsService : EmployeeDetailsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.login = JSON.parse(sessionStorage.getItem('login') || '{}');
    this.employeeDetailsService.getEmployeeByLoginId(this.login.loginId).subscribe(
      data => {
        this.employeeDetails = data;
        console.log(this.employeeDetails);
        this.requestId = this.activatedRoute.snapshot.params['requestId'];
        this.bookingDetails.requestDetails.requestId = this.requestId;
        this.getBookingDetailsById(this.bookingDetails.requestDetails.requestId);
  }
    );

}

getBookingDetailsById(requestId:number){
  console.log(this.bookingDetails);
  console.log("in getBookingDetailsById()");
  this.bookingDetailsService.viewBookingDetailsById(this.bookingDetails.requestDetails.requestId).subscribe(
    data =>{
      this.viewBookingDetailsById=data;
      console.log(this.getBookingDetailsById);
      

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
