import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnedUnitsComponent } from './returned-units.component';

describe('ReturnedUnitsComponent', () => {
  let component: ReturnedUnitsComponent;
  let fixture: ComponentFixture<ReturnedUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnedUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnedUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
