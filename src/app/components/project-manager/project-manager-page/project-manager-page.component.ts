import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-manager-page',
  templateUrl: './project-manager-page.component.html',
  styleUrls: ['./project-manager-page.component.css']
})
export class ProjectManagerPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigate(['login'])
  }
  viewTravelRequest(){
    this.router.navigate(['viewtravelrequest']);
  }
  addRequestPage(){
    this.router.navigate(['addrequestpage'])
  }
  viewExistingRequest(){
    this.router.navigate(['viewexistingrequest'])
  }

}
