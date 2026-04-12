import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  // Obtener usuarios por rol
  getUsuariosPorRol(): Observable<{ labels: string[], data: number[] }> {
    return this.http.get<any[]>(`${this.apiUrl}/usuarios`).pipe(
      map(usuarios => {
        const pacientes = usuarios.filter(u => u.rol === 'PACIENTE').length;
        const profesionales = usuarios.filter(u => u.rol === 'PROFESIONAL').length;
        const admins = usuarios.filter(u => u.rol === 'ADMIN').length;
        
        return {
          labels: ['Pacientes', 'Profesionales', 'Administradores'],
          data: [pacientes, profesionales, admins]
        };
      })
    );
  }

  // Obtener actividad mensual (basada en posts)
  getActividadMensual(): Observable<{ labels: string[], data: number[] }> {
    return this.http.get<any[]>(`${this.apiUrl}/posts`).pipe(
      map(posts => {
        const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];
        const actividadPorMes = [0, 0, 0, 0, 0, 0];
        
        posts.forEach(post => {
          const fecha = new Date(post.fecha);
          const mes = fecha.getMonth();
          if (mes >= 0 && mes < 6) {
            actividadPorMes[mes]++;
          }
        });
        
        return {
          labels: meses,
          data: actividadPorMes
        };
      })
    );
  }
}