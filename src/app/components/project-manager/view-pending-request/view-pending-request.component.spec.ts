import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPendingRequestComponent } from './view-pending-request.component';

describe('ViewPendingRequestComponent', () => {
  let component: ViewPendingRequestComponent;
  let fixture: ComponentFixture<ViewPendingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPendingRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPendingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
