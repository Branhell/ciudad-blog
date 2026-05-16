import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { AuthService } from '../services/auth.service';
import { FirebaseAuthService } from '../services/firebase-auth';
import { HttpClient } from '@angular/common/http';

declare var particlesJS: any;

@Component({
  selector: 'app-acceder',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './acceder.html',
  styleUrls: ['./acceder.css']
})
export class AccederComponent implements OnInit, OnDestroy, AfterViewInit {

  modoActivo: string = 'login';
  mostrarSeleccionRol: boolean = false;
  usuarioRegistradoId: number | null = null;
  solicitudEnviada: boolean = false;

  loginButtonText: string = 'Iniciar sesión';
  loginError: boolean = false;
  mensajeError: string = '';
  loginLoading: boolean = false;
  loginData = { email: '', password: '' };
  mostrarPassword: boolean = false;
  recordar: boolean = false;
  mostrarSocialButtons: boolean = true;

  registerButtonText: string = 'Crear cuenta';
  registerData = { nombre: '', email: '', password: '' };
  mostrarPasswordReg: boolean = false;
  registerLoading: boolean = false;
  registerError: boolean = false;
  registerMensajeError: string = '';

  mostrarModalRecuperar: boolean = false;
  recuperarEmail: string = '';
  modalMensaje: string = '';
  modalSuccess: boolean = false;

  testimonios = [
    { imagen: 'https://randomuser.me/api/portraits/women/68.jpg', nombre: 'María González', rol: 'Paciente', texto: 'OpenPsy me ha ayudado a entender mi relación con la tecnología.' },
    { imagen: 'https://randomuser.me/api/portraits/men/32.jpg', nombre: 'Carlos Rodríguez', rol: 'Psicólogo', texto: 'Plataforma segura para conectar con pacientes.' },
    { imagen: 'https://randomuser.me/api/portraits/women/45.jpg', nombre: 'Ana Lucía', rol: 'Paciente', texto: 'La comunidad me ha hecho sentir acompañada.' }
  ];

  indiceTestimonio: number = 0;
  intervaloTestimonio: any;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private authService: AuthService,
    public firebaseAuth: FirebaseAuthService,
    private http: HttpClient
  ) {}

  ngOnInit(): void { this.iniciarAutoplay(); }
  ngAfterViewInit(): void { this.iniciarParticles(); }
  ngOnDestroy(): void { if (this.intervaloTestimonio) clearInterval(this.intervaloTestimonio); }

  iniciarParticles(): void {
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: ["#FFB703", "#FFD966", "#E8E8E8", "#C0C0C0", "#A0A0A0", "#808080"] },
          shape: { type: "circle" },
          opacity: { value: 0.7, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
          size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.5, sync: false } },
          line_linked: { enable: true, distance: 150, color: "#FFB703", opacity: 0.6, width: 1.2 },
          move: { enable: true, speed: 4, direction: "none", random: true, straight: false, out_mode: "out", bounce: false, attract: { enable: true, rotateX: 600, rotateY: 1200 } }
        },
        interactivity: {
          detect_on: "canvas",
          events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
          modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
      });
    }
  }

  onLogin(): void {
    if (!this.loginData.email || !this.loginData.password) {
      this.loginError = true;
      this.mensajeError = 'Completa todos los campos';
      setTimeout(() => this.loginError = false, 3000);
      return;
    }
    this.loginLoading = true;
    this.mostrarSocialButtons = false;
    this.loginButtonText = 'Autenticando...';
    this.usuarioService.login(this.loginData.email, this.loginData.password).subscribe({
      next: (res: any) => {
        this.loginLoading = false;
        this.loginButtonText = 'Ingreso exitoso';
        const nombreUsuario = res.nombre || this.loginData.email.split('@')[0];
        localStorage.setItem('usuarioNombre', nombreUsuario);
        if (res.id) localStorage.setItem('usuarioId', res.id.toString());
        const avatarExistente = localStorage.getItem('usuarioAvatar');
        const avatarFinal = res.avatarUrl || avatarExistente;
        this.authService.login(this.loginData.email, res.token, res.rol, avatarFinal);
        setTimeout(() => { this.router.navigate(['/dashboard']); }, 1500);
      },
      error: (err: any) => {
        this.loginLoading = false;
        this.loginError = true;
        this.mensajeError = err.error?.mensaje || 'Correo o contraseña incorrectos';
        this.loginButtonText = 'Iniciar sesión';
        this.mostrarSocialButtons = true;
        setTimeout(() => this.loginError = false, 3000);
      }
    });
  }

  onRegister(): void {
    if (!this.registerData.nombre || !this.registerData.email || !this.registerData.password) {
      this.registerError = true;
      this.registerMensajeError = 'Completa todos los campos';
      return;
    }
    this.registerLoading = true;
    this.registerButtonText = 'Registrando...';
    const body = { ...this.registerData };
    this.http.post<any>('https://ciudad-blog-production.up.railway.app/api/usuarios', body).subscribe({
      next: (res: any) => {
        this.registerLoading = false;
        this.registerButtonText = 'Registro exitoso';
        // Obtener el ID del usuario registrado
        this.http.get<any[]>('https://ciudad-blog-production.up.railway.app/api/usuarios').subscribe(usuarios => {
          const usuario = usuarios.find(u => u.email === this.registerData.email);
          if (usuario) this.usuarioRegistradoId = usuario.id;
          setTimeout(() => { this.mostrarSeleccionRol = true; }, 1000);
        });
      },
      error: (err: any) => {
        this.registerLoading = false;
        this.registerError = true;
        this.registerMensajeError = err.error?.mensaje || 'Error al registrar';
        this.registerButtonText = 'Crear cuenta';
      }
    });
  }

  seleccionarRol(rol: string): void {
    if (rol === 'PACIENTE') {
      this.router.navigate(['/acceder']);
      this.mostrarSeleccionRol = false;
      this.modoActivo = 'login';
    } else if (rol === 'PROFESIONAL' && this.usuarioRegistradoId) {
      this.http.post(
        `https://ciudad-blog-production.up.railway.app/api/usuarios/solicitar-profesional?usuarioId=${this.usuarioRegistradoId}`,
        {}
      ).subscribe({
        next: () => { this.solicitudEnviada = true; },
        error: () => { this.solicitudEnviada = true; }
      });
    }
  }

  abrirModalRecuperar(): void { this.mostrarModalRecuperar = true; }
  cerrarModal(): void { this.mostrarModalRecuperar = false; }
  enviarRecuperacion(): void { this.modalMensaje = 'Enviado (demo)'; this.modalSuccess = true; setTimeout(() => this.cerrarModal(), 2000); }
  socialLogin(provider: string): void { alert(`Login con ${provider} pendiente`); }
  iniciarAutoplay(): void { this.intervaloTestimonio = setInterval(() => { this.testimonioSiguiente(); }, 5000); }
  testimonioSiguiente(): void { this.indiceTestimonio = (this.indiceTestimonio + 1) % this.testimonios.length; }
  testimonioAnterior(): void { this.indiceTestimonio = (this.indiceTestimonio - 1 + this.testimonios.length) % this.testimonios.length; }
  irTestimonio(index: number): void { this.indiceTestimonio = index; }
  cambiarModo(modo: string): void { this.modoActivo = modo; }
}
