import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionTableComponent } from './evaluacion-table.component';

describe('EvaluacionTableComponent', () => {
  let component: EvaluacionTableComponent;
  let fixture: ComponentFixture<EvaluacionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluacionTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
