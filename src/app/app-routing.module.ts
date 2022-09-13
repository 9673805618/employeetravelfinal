import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorMenuComponent } from './components/director/director-menu/director-menu.component';
import { DirectorPageComponent } from './components/director/director-page/director-page.component';
import { ViewTravelRequestsComponent } from './components/director/view-travel-requests/view-travel-requests.component';
import { AddRequestComponent } from './components/employee/add-request/add-request.component';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { ViewBookingDetailsComponent } from './components/employee/view-booking-details/view-booking-details.component';
import { ViewExistingRequestComponent } from './components/employee/view-existing-request/view-existing-request.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectManagerPageComponent } from './components/project-manager/project-manager-page/project-manager-page.component';
import { ViewTravelRequestComponent } from './components/project-manager/view-travel-request/view-travel-request.component';
import { AddBookingDetailsComponent } from './components/travel-agent/add-booking-details/add-booking-details.component';
import { BookingDetailsComponent } from './components/travel-agent/booking-details/booking-details.component';
import { CheckSlabDetailsComponent } from './components/travel-agent/check-slab-details/check-slab-details.component';
import { TravelAgentPageComponent } from './components/travel-agent/travel-agent-page/travel-agent-page.component';
import { ViewUpcomingTravelRequestComponent } from './components/travel-agent/view-upcoming-travel-request/view-upcoming-travel-request.component';

const routes: Routes = [
  { path: "verifyuser", component: LoginComponent },
  { path: "employee", component: EmployeeComponent },
  { path: "addrequestpage", component: AddRequestComponent },
  { path: "viewexistingrequest", component: ViewExistingRequestComponent },
  { path: "login", component: LoginComponent },
  { path: "viewbookingdetails/:requestId",component:ViewBookingDetailsComponent},
  { path: "projectmanagerpage", component:ProjectManagerPageComponent},
  { path: "viewtravelrequest", component:ViewTravelRequestComponent},
  { path: "travelagentpage",component:TravelAgentPageComponent},
  { path: "viewupcomingtravelrequest",component:ViewUpcomingTravelRequestComponent},
  { path: "addbookingdetails/:requestId",component:AddBookingDetailsComponent},
  { path:"checkSlab", component:CheckSlabDetailsComponent},
  { path:"directorpage", component:DirectorPageComponent},
  { path:"viewalltravelrequest",component:ViewTravelRequestsComponent},
  { path:"bookingdetails" , component:BookingDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
