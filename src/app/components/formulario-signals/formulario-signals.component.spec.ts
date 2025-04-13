import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSignalsComponent } from './formulario-signals.component';

describe('FormularioSignalsComponent', () => {
  let component: FormularioSignalsComponent;
  let fixture: ComponentFixture<FormularioSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
