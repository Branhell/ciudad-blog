package com.ciudadblog.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import java.util.List;
import java.time.LocalDateTime;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    // Buscar usuario por email (evita duplicados y útil para login)
    Optional<Usuario> findByEmail(String email);

    // Buscar usuarios por nombre (ejemplo: autores con cierto nombre)
    List<Usuario> findByNombreContainingIgnoreCase(String nombre);

    // Buscar usuarios registrados después de cierta fecha
    List<Usuario> findByFechaRegistroAfter(LocalDateTime fecha);

    // Buscar usuarios registrados antes de cierta fecha
    List<Usuario> findByFechaRegistroBefore(LocalDateTime fecha);
}