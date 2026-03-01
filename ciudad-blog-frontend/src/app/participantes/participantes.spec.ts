import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';   // 👈 para servicios que usan HttpClient
import { RouterTestingModule } from '@angular/router/testing';           // 👈 si el componente usa ActivatedRoute/Router
import { ParticipantesComponent } from './participantes';       // 👈 asegúrate que el archivo se llame participantes.component.ts

describe('ParticipantesComponent', () => {
  let component: ParticipantesComponent;
  let fixture: ComponentFixture<ParticipantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ParticipantesComponent,   // ✅ standalone se importa aquí
        HttpClientTestingModule,  // ✅ provee HttpClient en tests
        RouterTestingModule       // ✅ agrega soporte de rutas si el componente las usa
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ParticipantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
