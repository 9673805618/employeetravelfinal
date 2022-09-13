import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookingDetailsComponent } from './add-booking-details.component';

describe('AddBookingDetailsComponent', () => {
  let component: AddBookingDetailsComponent;
  let fixture: ComponentFixture<AddBookingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookingDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
