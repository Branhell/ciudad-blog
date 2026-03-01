import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // 👈 si tu Login usa servicios con HttpClient
import { RouterTestingModule } from '@angular/router/testing';          // 👈 si tu Login usa ActivatedRoute/Router
import { LoginComponent } from './login';                      // 👈 asegúrate que el archivo se llame login.component.ts

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginComponent,         // ✅ standalone se importa aquí
        HttpClientTestingModule, // agrega si tu componente/servicio usa HttpClient
        RouterTestingModule      // agrega si tu componente usa rutas
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
