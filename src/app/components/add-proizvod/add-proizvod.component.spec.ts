import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProizvodComponent } from './add-proizvod.component';

describe('AddProizvodComponent', () => {
  let component: AddProizvodComponent;
  let fixture: ComponentFixture<AddProizvodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProizvodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProizvodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
