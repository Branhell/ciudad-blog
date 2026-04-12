import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private permissionGranted = false;

  constructor() {}

  // Solicitar permiso para notificaciones
  async requestPermission() {
    if (!('Notification' in window)) {
      console.log('❌ Este navegador no soporta notificaciones');
      return;
    }

    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        this.permissionGranted = true;
        console.log('✅ Permiso concedido para notificaciones');
      } else {
        console.log('❌ Permiso denegado');
      }
    } catch (error) {
      console.error('Error al solicitar permiso:', error);
    }
  }

  // Mostrar notificación simple
  showNotification(title: string, body: string, icon?: string) {
    if (!this.permissionGranted) {
      console.log('No hay permiso para mostrar notificaciones');
      return;
    }

    const options: NotificationOptions = {
      body: body,
      icon: icon || '/assets/EcoBits_Logo.png',
      badge: '/assets/EcoBits_Logo.png'
    };

    new Notification(title, options);
  }

  // Simular notificación de prueba
  testNotification() {
    this.showNotification(
      '¡EcoBits te da la bienvenida!',
      'Recibirás notificaciones cuando haya novedades importantes.',
      '/assets/EcoBits_Logo.png'
    );
  }
}