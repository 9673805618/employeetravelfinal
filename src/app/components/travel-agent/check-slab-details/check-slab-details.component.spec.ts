import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSlabDetailsComponent } from './check-slab-details.component';

describe('CheckSlabDetailsComponent', () => {
  let component: CheckSlabDetailsComponent;
  let fixture: ComponentFixture<CheckSlabDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckSlabDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckSlabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
