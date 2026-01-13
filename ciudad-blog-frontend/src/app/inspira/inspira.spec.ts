import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inspira } from './inspira';

describe('Inspira', () => {
  let component: Inspira;
  let fixture: ComponentFixture<Inspira>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inspira]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inspira);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
