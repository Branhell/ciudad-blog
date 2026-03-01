package com.ciudadblog.backend;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "titulo", nullable = false, length = 200)
    private String titulo;

    @Column(name = "contenido", nullable = false, columnDefinition = "TEXT")
    private String contenido;

    @Column(name = "fecha", nullable = false)
    private LocalDateTime fecha;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "autor_id", referencedColumnName = "id", nullable = false)
    private Usuario autor;

    @Column(name = "solicitud_eliminacion", nullable = false)
    private Boolean solicitudEliminacion;

    @Column(name = "aprobado", nullable = false)
    private Boolean aprobado;

    @Column(name = "anonimo", nullable = false)
    private Boolean anonimo;

    @Column(name = "likes", nullable = false)
    private Integer likes;

    @Column(name = "comentarios_count", nullable = false)
    private Integer comentariosCount;

    @Column(name = "categoria", nullable = false, length = 50)
    private String categoria;

    public Post() {}

    // Getters y setters
    public Long getId() { return id; }

    public String getTitulo() { return titulo; }
    public void setTitulo(String titulo) { this.titulo = titulo; }

    public String getContenido() { return contenido; }
    public void setContenido(String contenido) { this.contenido = contenido; }

    public LocalDateTime getFecha() { return fecha; }
    public void setFecha(LocalDateTime fecha) { this.fecha = fecha; }

    public Usuario getAutor() { return autor; }
    public void setAutor(Usuario autor) { this.autor = autor; }

    public Boolean getSolicitudEliminacion() { return solicitudEliminacion; }
    public void setSolicitudEliminacion(Boolean solicitudEliminacion) { this.solicitudEliminacion = solicitudEliminacion; }

    public Boolean getAprobado() { return aprobado; }
    public void setAprobado(Boolean aprobado) { this.aprobado = aprobado; }

    public Boolean getAnonimo() { return anonimo; }
    public void setAnonimo(Boolean anonimo) { this.anonimo = anonimo; }

    public Integer getLikes() { return likes; }
    public void setLikes(Integer likes) { this.likes = likes; }

    public Integer getComentariosCount() { return comentariosCount; }
    public void setComentariosCount(Integer comentariosCount) { this.comentariosCount = comentariosCount; }

    public String getCategoria() { return categoria; }
    public void setCategoria(String categoria) { this.categoria = categoria; }

    // Valores automáticos y por defecto
    @PrePersist
    public void prePersist() {
        this.fecha = LocalDateTime.now();
        if (this.likes == null) this.likes = 0;
        if (this.comentariosCount == null) this.comentariosCount = 0;
        if (this.anonimo == null) this.anonimo = false;
        if (this.solicitudEliminacion == null) this.solicitudEliminacion = false;
        if (this.categoria == null) this.categoria = "EXPRESATE";
        if (this.aprobado == null) this.aprobado = true; // 👈 aquí luego puedes aplicar moderación automática
    }
}
