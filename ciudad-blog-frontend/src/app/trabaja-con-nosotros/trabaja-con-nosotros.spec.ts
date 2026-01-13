import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajaConNosotros } from './trabaja-con-nosotros';

describe('TrabajaConNosotros', () => {
  let component: TrabajaConNosotros;
  let fixture: ComponentFixture<TrabajaConNosotros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrabajaConNosotros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajaConNosotros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
