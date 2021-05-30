import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesTableComponent } from './informes-table.component';

describe('InformesTableComponent', () => {
  let component: InformesTableComponent;
  let fixture: ComponentFixture<InformesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
