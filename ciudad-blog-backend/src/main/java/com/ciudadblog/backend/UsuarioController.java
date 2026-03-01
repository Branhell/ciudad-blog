package com.ciudadblog.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*", allowCredentials = "false")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping
    public List<Usuario> obtenerUsuarios() {
        return usuarioRepository.findAll();
    }

    @PostMapping
    public Usuario crearUsuario(@RequestBody Usuario nuevoUsuario) {
        return usuarioRepository.save(nuevoUsuario);
    }

    @GetMapping("/autores")
    public List<Usuario> obtenerAutores() {
        return usuarioRepository.findAll();
    }

    // 👇 Método login corregido para devolver JSON
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody LoginRequest request) {
        System.out.println("Credenciales recibidas: " + request.getEmail() + " / " + request.getPassword());

        Map<String, String> response = new HashMap<>();

        if ("brayan@ejemplo.com".equals(request.getEmail()) && "1234".equals(request.getPassword())) {
            response.put("mensaje", "Login correcto");
            return ResponseEntity.ok(response);
        } else {
            response.put("mensaje", "Credenciales inválidas");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }
}
