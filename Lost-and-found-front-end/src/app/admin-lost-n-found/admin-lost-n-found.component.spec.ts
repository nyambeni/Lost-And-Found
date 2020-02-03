import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLostNFoundComponent } from './admin-lost-n-found.component';

describe('AdminLostNFoundComponent', () => {
  let component: AdminLostNFoundComponent;
  let fixture: ComponentFixture<AdminLostNFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLostNFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLostNFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
