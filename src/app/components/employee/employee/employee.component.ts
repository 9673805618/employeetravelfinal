import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/domain/login';
import { EmployeeDetailsService } from 'src/app/services/employee-details.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  login:Login=new Login();
  constructor(private employeeDetailService : EmployeeDetailsService,
    private router:Router) { }

  ngOnInit(): void {

  }
  addRequestPage(){
    this.router.navigate(['addrequestpage'])
  }
  viewExistingRequest(){
    this.router.navigate(['viewexistingrequest'])
  }
  logout(){
    this.router.navigate(['login'])
  }
  
 
}
