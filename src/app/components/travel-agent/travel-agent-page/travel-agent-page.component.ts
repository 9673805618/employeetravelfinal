import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-agent-page',
  templateUrl: './travel-agent-page.component.html',
  styleUrls: ['./travel-agent-page.component.css']
})
export class TravelAgentPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigate(['login'])
  }
  viewUpcomingRequest(){
    this.router.navigate(['viewupcomingtravelrequest'])
  }

  bookingDetails(){
    this.router.navigate(['bookingdetails']);
  }

}
