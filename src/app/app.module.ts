import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AddRequestComponent } from './components/employee/add-request/add-request.component';
import { ViewExistingRequestComponent } from './components/employee/view-existing-request/view-existing-request.component';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginMenuComponent } from './components/login-menu/login-menu.component';
import { ViewBookingDetailsComponent } from './components/employee/view-booking-details/view-booking-details.component';
import { ProjectManagerPageComponent } from './components/project-manager/project-manager-page/project-manager-page.component';
import { ViewTravelRequestComponent } from './components/project-manager/view-travel-request/view-travel-request.component';
import { ViewPendingRequestComponent } from './components/project-manager/view-pending-request/view-pending-request.component';
import { TravelAgentPageComponent } from './components/travel-agent/travel-agent-page/travel-agent-page.component';
import { ViewUpcomingTravelRequestComponent } from './components/travel-agent/view-upcoming-travel-request/view-upcoming-travel-request.component';
import { BookingDetailsComponent } from './components/travel-agent/booking-details/booking-details.component';
import { CheckSlabDetailsComponent } from './components/travel-agent/check-slab-details/check-slab-details.component';
import { AddBookingDetailsComponent } from './components/travel-agent/add-booking-details/add-booking-details.component';
import { DirectorPageComponent } from './components/director/director-page/director-page.component';
import { DirectorMenuComponent } from './components/director/director-menu/director-menu.component';
import { ViewTravelRequestsComponent } from './components/director/view-travel-requests/view-travel-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddRequestComponent,
    ViewExistingRequestComponent,
    EmployeeComponent,
    LoginMenuComponent,
    ViewBookingDetailsComponent,
    ProjectManagerPageComponent,
    ViewTravelRequestComponent,
    ViewPendingRequestComponent,
    TravelAgentPageComponent,
    ViewUpcomingTravelRequestComponent,
    BookingDetailsComponent,
    CheckSlabDetailsComponent,
    AddBookingDetailsComponent,
    DirectorPageComponent,
    DirectorMenuComponent,
    ViewTravelRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
