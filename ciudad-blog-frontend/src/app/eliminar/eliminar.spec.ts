import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';   // 👈 para servicios que usan HttpClient
import { RouterTestingModule } from '@angular/router/testing';           // 👈 si el componente usa ActivatedRoute/Router
import { EliminarComponent } from './eliminar';                 // 👈 asegúrate que el archivo se llame eliminar.component.ts

describe('EliminarComponent', () => {
  let component: EliminarComponent;
  let fixture: ComponentFixture<EliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EliminarComponent,        // ✅ standalone se importa aquí
        HttpClientTestingModule,  // ✅ provee HttpClient en tests
        RouterTestingModule       // ✅ agrega soporte de rutas si el componente las usa
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
