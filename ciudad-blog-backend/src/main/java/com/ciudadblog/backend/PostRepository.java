package com.ciudadblog.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    // 👇 Buscar posts por autor
    List<Post> findByAutorId(Long autorId);

    // 👇 Buscar posts por categoría
    List<Post> findByCategoria(String categoria);

    // 👇 Buscar solo posts aprobados
    List<Post> findByAprobadoTrue();

    // 👇 Buscar posts que solicitaron eliminación
    List<Post> findBySolicitudEliminacionTrue();

    // 👇 Buscar posts anónimos
    List<Post> findByAnonimoTrue();
}
