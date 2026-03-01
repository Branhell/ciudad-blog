import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaUrgente } from './ayuda-urgente';

describe('AyudaUrgente', () => {
  let component: AyudaUrgente;
  let fixture: ComponentFixture<AyudaUrgente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AyudaUrgente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AyudaUrgente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
