import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorMenuComponent } from './director-menu.component';

describe('DirectorMenuComponent', () => {
  let component: DirectorMenuComponent;
  let fixture: ComponentFixture<DirectorMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
