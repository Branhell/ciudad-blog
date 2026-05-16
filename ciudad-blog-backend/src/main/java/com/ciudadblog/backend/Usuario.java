package com.ciudadblog.backend;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre", nullable = false, length = 100)
    private String nombre;

    @Column(name = "email", nullable = false, unique = true, length = 150)
    private String email;

    @Column(name = "fecha_registro", nullable = false)
    private LocalDateTime fechaRegistro;

    @Column(name = "password", length = 255)
    private String password;

    @Column(name = "rol", length = 50)
    private String rol;

    @Column(name = "avatar_url", length = 500)
    private String avatarUrl;

    @Column(name = "solicitud_profesional")
    private Boolean solicitudProfesional = false;

    @Column(name = "solicitud_fecha")
    private LocalDateTime solicitudFecha;

    public Usuario() {}

    @PrePersist
    public void prePersist() {
        this.fechaRegistro = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public LocalDateTime getFechaRegistro() { return fechaRegistro; }
    public void setFechaRegistro(LocalDateTime fechaRegistro) { this.fechaRegistro = fechaRegistro; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getRol() { return rol; }
    public void setRol(String rol) { this.rol = rol; }
    public String getAvatarUrl() { return avatarUrl; }
    public void setAvatarUrl(String avatarUrl) { this.avatarUrl = avatarUrl; }
    public Boolean getSolicitudProfesional() { return solicitudProfesional; }
    public void setSolicitudProfesional(Boolean solicitudProfesional) { this.solicitudProfesional = solicitudProfesional; }
    public LocalDateTime getSolicitudFecha() { return solicitudFecha; }
    public void setSolicitudFecha(LocalDateTime solicitudFecha) { this.solicitudFecha = solicitudFecha; }
}
