package com.ciudadblog.backend;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;
    private String contenido;


    @Column(name = "fecha")
    private LocalDateTime fecha;

    @ManyToOne(fetch = FetchType.EAGER) // 👈 se asegura de traer todo
    @JoinColumn(name = "autor_id")
    private Usuario autor;

    private boolean solicitudEliminacion = false; // 👈 este es nuevo

    public Post() {}

    // Getters y setters
    public Long getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) {
        this.contenido = contenido;
    }

    public LocalDateTime getFecha() {
        return fecha;
    }

    public void setFecha(LocalDateTime fecha) {
        this.fecha = fecha;
    }

    public Usuario getAutor() {
        return autor;
    }

    public void setAutor(Usuario autor) {
        this.autor = autor;
    }
    // 👇 Aquí pegás los nuevos métodos
    public boolean isSolicitudEliminacion() {
        return solicitudEliminacion;
    }
    public void setSolicitudEliminacion(boolean solicitudEliminacion) {
        this.solicitudEliminacion = solicitudEliminacion;
    }

    @PrePersist
    public void generarFecha() {
        this.fecha = LocalDateTime.now();
    }
}
