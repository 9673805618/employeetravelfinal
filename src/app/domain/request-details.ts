import { EmployeeDetails } from "./employee-details";
import { DocumentDetails } from "./employee-documents";


export class RequestDetails {
    requestId: number = 0;
    employeeDetails: EmployeeDetails= new EmployeeDetails();
    departureLocation: string = "";
    destination: string = "";
    modeOfTravel: string = "";
    purposeOfTravelling: string = "";
    departureDate: Date = new Date();
    arrivalDate: Date = new Date();
    status: string = "pending";
    documentsDetails: DocumentDetails = new DocumentDetails();
}