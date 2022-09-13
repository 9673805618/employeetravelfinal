import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerPageComponent } from './project-manager-page.component';

describe('ProjectManagerPageComponent', () => {
  let component: ProjectManagerPageComponent;
  let fixture: ComponentFixture<ProjectManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManagerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
