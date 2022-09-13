import { RequestDetails } from "./request-details";

export class BookingDetails{
    bookingId:number=0;
    requestDetails : RequestDetails= new RequestDetails();
    travelCost:number=0;
    hotelName:string="";
    checkIn:string="";
    checkOut:string="";
    departureTime:string="";
    arrivalTime:string="";
}