export interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

export interface Post {
  id: number;
  titulo: string;
  contenido: string;
  fecha: string;
  autor: Usuario;
  anonimo: boolean;
  likes: number;
  comentariosCount: number;
  categoria: string;
  aprobado?: boolean;
  solicitudEliminacion?: boolean;
}
