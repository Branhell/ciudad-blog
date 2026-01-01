import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';   // 👈 si tu componente usa HttpClient
import { RouterTestingModule } from '@angular/router/testing';           // 👈 si tu componente usa ActivatedRoute/Router
import { RegistroComponent } from './registro';                 // 👈 asegúrate que el archivo se llame registro.component.ts

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RegistroComponent,        // ✅ standalone se importa aquí
        HttpClientTestingModule,  // agrega si tu componente/servicio usa HttpClient
        RouterTestingModule       // agrega si tu componente usa rutas
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
