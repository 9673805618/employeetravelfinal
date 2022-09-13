import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpcomingTravelRequestComponent } from './view-upcoming-travel-request.component';

describe('ViewUpcomingTravelRequestComponent', () => {
  let component: ViewUpcomingTravelRequestComponent;
  let fixture: ComponentFixture<ViewUpcomingTravelRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUpcomingTravelRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUpcomingTravelRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
