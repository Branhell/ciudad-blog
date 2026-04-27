import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-acceder',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './acceder.html',
  styleUrls: ['./acceder.css']
})
export class AccederComponent implements OnInit, OnDestroy {
  modoActivo: string = 'login';

  // Login
  loginButtonText: string = 'Iniciar sesión';
  loginError: boolean = false;
  mensajeError: string = '';
  loginLoading: boolean = false;
  loginData = { email: '', password: '' };
  mostrarPassword = false;
  recordar = false;
  mostrarSocialButtons: boolean = true;

  // Registro
  registerButtonText: string = 'Crear cuenta';
  registerData = { nombre: '', email: '', password: '' };
  mostrarPasswordReg = false;
  registerLoading = false;
  registerError: boolean = false;
  registerMensajeError: string = '';

  // Testimonios
  testimonios = [
    {
      imagen: 'https://randomuser.me/api/portraits/women/68.jpg',
      nombre: 'María González',
      rol: 'Paciente',
      texto: 'OpenPsy me ha ayudado a entender mi relación con la tecnología. El apoyo de los profesionales es increíble.'
    },
    {
      imagen: 'https://randomuser.me/api/portraits/men/32.jpg',
      nombre: 'Carlos Rodríguez',
      rol: 'Psicólogo',
      texto: 'Como profesional, encuentro en OpenPsy una plataforma segura para conectar con mis pacientes.'
    },
    {
      imagen: 'https://randomuser.me/api/portraits/women/45.jpg',
      nombre: 'Ana Lucía',
      rol: 'Paciente',
      texto: 'La comunidad me ha hecho sentir acompañada. Los recursos y talleres son excelentes.'
    }
  ];
  indiceTestimonio = 0;
  intervaloTestimonio: any;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.iniciarAutoplay();
  }

  ngOnDestroy() {
    if (this.intervaloTestimonio) {
      clearInterval(this.intervaloTestimonio);
    }
  }

  cambiarModo(modo: string) {
    this.modoActivo = modo;
    // Resetear login
    this.loginButtonText = 'Iniciar sesión';
    this.loginError = false;
    this.loginLoading = false;
    this.mostrarSocialButtons = true;
    // Resetear registro
    this.registerButtonText = 'Crear cuenta';
    this.registerLoading = false;
    this.registerError = false;
    this.registerMensajeError = '';
  }

  // LOGIN REAL CON BACKEND - TIEMPOS MÁS LENTOS
  onLogin() {
    if (!this.loginData.email || !this.loginData.password) {
      this.loginError = true;
      this.mensajeError = 'Completa todos los campos';
      setTimeout(() => { this.loginError = false; }, 3000);
      return;
    }

    this.loginError = false;
    this.loginLoading = true;
    this.mostrarSocialButtons = false;
    this.loginButtonText = 'Autenticando...';

    this.usuarioService.login(this.loginData.email, this.loginData.password).subscribe({
      next: (res) => {
        this.loginLoading = false;
        this.loginButtonText = 'Ingreso exitoso';
        
        // "Ingreso exitoso" visible por 2 segundos
        setTimeout(() => {
          this.loginButtonText = 'Welcome to OpenPsy';
          
          // "Welcome to OpenPsy" visible por 1 segundos
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 1000);
        }, 2000);
      },
      error: (err) => {
        this.loginLoading = false;
        this.loginError = true;
        this.mensajeError = err.error?.mensaje || 'Correo o contraseña incorrectos';
        this.loginButtonText = 'Iniciar sesión';
        this.mostrarSocialButtons = true;
        
        setTimeout(() => {
          this.loginError = false;
        }, 3000);
      }
    });
  }

  // REGISTRO REAL CON BACKEND - TIEMPOS MÁS LENTOS
  onRegister() {
    if (!this.registerData.nombre || !this.registerData.email || !this.registerData.password) {
      this.registerError = true;
      this.registerMensajeError = 'Completa todos los campos';
      setTimeout(() => { this.registerError = false; }, 3000);
      return;
    }

    if (!this.registerData.email.includes('@')) {
      this.registerError = true;
      this.registerMensajeError = 'Email no válido';
      setTimeout(() => { this.registerError = false; }, 3000);
      return;
    }

    if (this.registerData.password.length < 8) {
      this.registerError = true;
      this.registerMensajeError = 'La contraseña debe tener al menos 8 caracteres';
      setTimeout(() => { this.registerError = false; }, 3000);
      return;
    }

    this.registerLoading = true;
    this.registerButtonText = 'Registrando...';

    const body = {
      nombre: this.registerData.nombre,
      email: this.registerData.email,
      password: this.registerData.password
    };

    this.usuarioService['http'].post('http://localhost:8080/api/usuarios', body).subscribe({
      next: () => {
        this.registerLoading = false;
        this.registerButtonText = 'Registro exitoso';
        
        // "Registro exitoso" visible por 2 segundos
        setTimeout(() => {
          this.registerButtonText = 'Welcome to OpenPsy';
          
          // "Welcome to OpenPsy" visible por 2.5 segundos
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1000);
        }, 2000);
      },
      error: (err) => {
        this.registerLoading = false;
        this.registerError = true;
        this.registerMensajeError = err.error?.mensaje || 'Error al registrar';
        this.registerButtonText = 'Crear cuenta';
        
        setTimeout(() => {
          this.registerError = false;
        }, 3000);
      }
    });
  }

  socialLogin(provider: string) {
    alert(`Autenticación con ${provider} (pendiente de implementar)`);
  }

  iniciarAutoplay() {
    this.intervaloTestimonio = setInterval(() => {
      this.testimonioSiguiente();
    }, 5000);
  }

  testimonioSiguiente() {
    this.indiceTestimonio = (this.indiceTestimonio + 1) % this.testimonios.length;
  }

  testimonioAnterior() {
    this.indiceTestimonio = (this.indiceTestimonio - 1 + this.testimonios.length) % this.testimonios.length;
  }

  irTestimonio(index: number) {
    this.indiceTestimonio = index;
  }
}