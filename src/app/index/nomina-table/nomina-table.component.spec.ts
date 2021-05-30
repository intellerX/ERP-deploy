import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominaTableComponent } from './nomina-table.component';

describe('NominaTableComponent', () => {
  let component: NominaTableComponent;
  let fixture: ComponentFixture<NominaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
