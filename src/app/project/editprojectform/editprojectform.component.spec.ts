import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprojectformComponent } from './editprojectform.component';

describe('EditprojectformComponent', () => {
  let component: EditprojectformComponent;
  let fixture: ComponentFixture<EditprojectformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprojectformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprojectformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
