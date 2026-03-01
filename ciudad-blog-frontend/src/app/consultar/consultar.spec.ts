import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';   // 👈 para servicios que usan HttpClient
import { RouterTestingModule } from '@angular/router/testing';           // 👈 si el componente usa ActivatedRoute/Router
import { ConsultarComponent } from './consultar';               // 👈 asegúrate que el archivo se llame consultar.component.ts

describe('ConsultarComponent', () => {
  let component: ConsultarComponent;
  let fixture: ComponentFixture<ConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ConsultarComponent,       // ✅ standalone se importa aquí
        HttpClientTestingModule,  // ✅ provee HttpClient en tests
        RouterTestingModule       // ✅ agrega soporte de rutas si el componente las usa
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
