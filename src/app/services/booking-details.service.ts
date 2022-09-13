import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingDetails } from '../domain/booking-details';

@Injectable({
  providedIn: 'root'
})
export class BookingDetailsService {
  private baseURL="http://localhost:8080/bookingdetailsapi/addbookingdetail";
  private baseURL2="http://localhost:8080/bookingdetailsapi/viewbookingdetails";
  private baseURL3="http://localhost:8080/bookingdetailsapi/viewbookingdetails";
  

  constructor(private httpClient:HttpClient) { }

  addrequest(bookingDetails:BookingDetails){
    console.log("in addRequest()");
    return this.httpClient.post<boolean>(this.baseURL,bookingDetails);
  }

  viewBookingDetails(bookingDetails : BookingDetails) : Observable<BookingDetails[]>{
    console.log("in booking details");
    return this.httpClient.get<BookingDetails[]>(this.baseURL2);    
  }

  viewBookingDetailsById(requestId:number):Observable<BookingDetails[]>{
    console.log("in viewBookingDetailsById()");
    return this.httpClient.get<BookingDetails[]>(this.baseURL3+'/'+requestId);
    
  }
}
