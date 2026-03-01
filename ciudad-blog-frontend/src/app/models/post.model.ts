export interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

export interface Post {
  id: number;                // obligatorio
  titulo: string;
  contenido: string;
  fecha: string;
  autor: Usuario;
  anonimo: boolean;
  likes: number;
  comentariosCount: number;
  aprobado?: boolean;        // opcional, usado al crear
}
