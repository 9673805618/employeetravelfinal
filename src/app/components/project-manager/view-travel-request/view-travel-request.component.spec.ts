import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTravelRequestComponent } from './view-travel-request.component';

describe('ViewTravelRequestComponent', () => {
  let component: ViewTravelRequestComponent;
  let fixture: ComponentFixture<ViewTravelRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTravelRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTravelRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
