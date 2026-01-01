import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';   // 👈 para servicios que usan HttpClient
import { RouterTestingModule } from '@angular/router/testing';           // 👈 si el componente usa ActivatedRoute/Router
import { ExpresateComponent } from './expresate';               // 👈 asegúrate que el archivo se llame expresate.component.ts

describe('ExpresateComponent', () => {
  let component: ExpresateComponent;
  let fixture: ComponentFixture<ExpresateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ExpresateComponent,       // ✅ standalone se importa aquí
        HttpClientTestingModule,  // ✅ provee HttpClient en tests
        RouterTestingModule       // ✅ agrega soporte de rutas si el componente las usa
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpresateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
