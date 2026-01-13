import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantumMagazine } from './quantum-magazine';

describe('QuantumMagazine', () => {
  let component: QuantumMagazine;
  let fixture: ComponentFixture<QuantumMagazine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantumMagazine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantumMagazine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
