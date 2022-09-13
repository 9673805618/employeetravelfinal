import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTravelRequestsComponent } from './view-travel-requests.component';

describe('ViewTravelRequestsComponent', () => {
  let component: ViewTravelRequestsComponent;
  let fixture: ComponentFixture<ViewTravelRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTravelRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTravelRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
