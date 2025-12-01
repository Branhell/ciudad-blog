package com.ciudadblog.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*") // 👈 habilita CORS para que Angular pueda consumir sin problemas
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    // GET /api/usuarios → lista todos los usuarios
    @GetMapping
    public List<Usuario> obtenerUsuarios() {
        return usuarioRepository.findAll();
    }

    // POST /api/usuarios → crea un nuevo usuario
    @PostMapping
    public Usuario crearUsuario(@RequestBody Usuario nuevoUsuario) {
        return usuarioRepository.save(nuevoUsuario);
    }

    // GET /api/usuarios/autores → lista autores (puedes filtrar si quieres solo ciertos roles)
    @GetMapping("/autores")
    public List<Usuario> obtenerAutores() {
        return usuarioRepository.findAll();
    }
}
