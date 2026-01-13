import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';           // 👈 si el componente usa ActivatedRoute/Router
import { DashboardComponent } from './dashboard';              // 👈 asegúrate que el archivo se llame dashboard.component.ts

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DashboardComponent,     // ✅ standalone se importa aquí
        RouterTestingModule     // ✅ agrega soporte de rutas si el componente las usa
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
