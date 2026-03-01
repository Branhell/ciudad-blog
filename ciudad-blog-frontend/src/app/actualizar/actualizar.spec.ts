import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';   // 👈 para servicios que usan HttpClient
import { RouterTestingModule } from '@angular/router/testing';           // 👈 si el componente usa ActivatedRoute/Router
import { ActualizarComponent } from './actualizar';             // 👈 asegúrate que el archivo se llame actualizar.component.ts

describe('ActualizarComponent', () => {
  let component: ActualizarComponent;
  let fixture: ComponentFixture<ActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ActualizarComponent,      // ✅ standalone se importa aquí
        HttpClientTestingModule,  // ✅ provee HttpClient en tests
        RouterTestingModule       // ✅ agrega soporte de rutas si el componente las usa
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
