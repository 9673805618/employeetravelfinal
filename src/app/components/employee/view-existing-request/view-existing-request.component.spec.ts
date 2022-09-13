import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExistingRequestComponent } from './view-existing-request.component';

describe('ViewExistingRequestComponent', () => {
  let component: ViewExistingRequestComponent;
  let fixture: ComponentFixture<ViewExistingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExistingRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewExistingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
