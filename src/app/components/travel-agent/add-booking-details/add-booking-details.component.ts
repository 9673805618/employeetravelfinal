import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingDetails } from 'src/app/domain/booking-details';
import { EmployeeDetails } from 'src/app/domain/employee-details';
import { Login } from 'src/app/domain/login';
import { RequestDetails } from 'src/app/domain/request-details';
import { BookingDetailsService } from 'src/app/services/booking-details.service';
import { EmployeeDetailsService } from 'src/app/services/employee-details.service';
import { RequestDetailsService } from 'src/app/services/request-details.service';


@Component({
  selector: 'app-add-booking-details',
  templateUrl: './add-booking-details.component.html',
  styleUrls: ['./add-booking-details.component.css']
})
export class AddBookingDetailsComponent implements OnInit {
  bookingDetails: BookingDetails = new BookingDetails();
  requestDetails: RequestDetails = new RequestDetails();
  employeeDetails:EmployeeDetails=new EmployeeDetails();

  login: Login = new Login;
  result: boolean = false;
  submitted: boolean = false;
  requestId: number = 0;
  constructor(private bookingDetailsService: BookingDetailsService,
    private requestDetailsService: RequestDetailsService,
    private employeeDetailsService:EmployeeDetailsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.login = JSON.parse(sessionStorage.getItem('login') || '{}');
    this.employeeDetailsService.getEmployeeByLoginId(this.login.loginId).subscribe(
      data => {
        this.employeeDetails = data;
        console.log(this.employeeDetails);

    this.requestId = this.activatedRoute.snapshot.params['requestId'];
    this.bookingDetails.requestDetails.requestId = this.requestId;
  }
    );
}

  updateStatus(requestDetails: RequestDetails) {
    console.log(requestDetails);

    this.requestDetailsService.updateRequestStatus(requestDetails).subscribe(
      data => {

        this.requestDetails = data;
        console.log(this.requestDetails);


      }
    );
  }



  addBookingDetails() {
    console.log("in addNewRequest()");

    console.log(this.bookingDetails);

    this.bookingDetailsService.addrequest(this.bookingDetails).subscribe(
      data => {
        this.result = data;
        console.log(this.result);
        this.submitted = true;
        this.bookingDetails.requestDetails.status="Booking Done";
        this.updateStatus(this.bookingDetails.requestDetails);

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
