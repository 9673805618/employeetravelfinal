import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingDetails } from 'src/app/domain/booking-details';
import { EmployeeDetails } from 'src/app/domain/employee-details';
import { Login } from 'src/app/domain/login';
import { BookingDetailsService } from 'src/app/services/booking-details.service';
import { EmployeeDetailsService } from 'src/app/services/employee-details.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
    bookingDetails : BookingDetails = new BookingDetails();
    viewAllBookingDetails : BookingDetails []= [];
    login : Login = new Login();
    employeeDetails : EmployeeDetails = new EmployeeDetails();

  constructor(
    private router : Router, 
    private bookingDetailsService : BookingDetailsService,
    private employeeDetailsService : EmployeeDetailsService
  ) { }

  ngOnInit(): void {
    this.login = JSON.parse(sessionStorage.getItem('login') || '{}');
    this.employeeDetailsService.getEmployeeByLoginId(this.login.loginId).subscribe(
      data => {
        this.employeeDetails = data;
        console.log(this.employeeDetails);
        this.getAllBookingDetails();
  }
    );
  }

  getAllBookingDetails(){
    console.log(this.bookingDetails);
    console.log("in get all booking details");
    this.bookingDetailsService.viewBookingDetails(this.bookingDetails).subscribe(
      data=>{
        this.viewAllBookingDetails= data;
        console.log(this.viewAllBookingDetails);
        
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
    } else if (this.login.designation === "Travel Agent") {
      this.router.navigate(['travelagentpage']);
    }

  }
}
