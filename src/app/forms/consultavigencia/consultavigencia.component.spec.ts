import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultavigenciaComponent } from './consultavigencia.component';

describe('ConsultavigenciaComponent', () => {
  let component: ConsultavigenciaComponent;
  let fixture: ComponentFixture<ConsultavigenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultavigenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultavigenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
