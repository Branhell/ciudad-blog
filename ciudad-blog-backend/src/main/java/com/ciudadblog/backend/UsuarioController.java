package com.ciudadblog.backend;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*", allowCredentials = "false")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private JwtUtil jwtUtil;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @GetMapping
    public List<Usuario> obtenerUsuarios() {
        return usuarioRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> crearUsuario(@RequestBody Usuario nuevoUsuario) {
        Map<String, String> response = new HashMap<>();

        // Verificar si el email ya existe
        if (usuarioRepository.findByEmail(nuevoUsuario.getEmail()).isPresent()) {
            response.put("mensaje", "El email ya está registrado");
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }

        // Hashear contraseña
        nuevoUsuario.setPassword(passwordEncoder.encode(nuevoUsuario.getPassword()));

        // Rol por defecto
        if (nuevoUsuario.getRol() == null || nuevoUsuario.getRol().isEmpty()) {
            nuevoUsuario.setRol("PACIENTE");
        }

        usuarioRepository.save(nuevoUsuario);
        response.put("mensaje", "Usuario registrado correctamente");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/autores")
    public List<Usuario> obtenerAutores() {
        return usuarioRepository.findAll();
    }

	@PostMapping("/login")
	public ResponseEntity<Map<String, String>> login(@RequestBody LoginRequest request) {
		Map<String, String> response = new HashMap<>();

		// Validación de inputs
		if (request.getEmail() == null || request.getEmail().isBlank()) {
			response.put("mensaje", "El email es obligatorio");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
		}
		if (request.getPassword() == null || request.getPassword().isBlank()) {
			response.put("mensaje", "La contraseña es obligatoria");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
		}
		if (!request.getEmail().contains("@")) {
			response.put("mensaje", "El email no es válido");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
		}

		try {
			Optional<Usuario> usuarioOpt = usuarioRepository.findByEmail(request.getEmail());
			if (usuarioOpt.isPresent()) {
				Usuario usuario = usuarioOpt.get();
				if (usuario.getPassword() != null &&
					passwordEncoder.matches(request.getPassword(), usuario.getPassword())) {
					String token = jwtUtil.generateToken(usuario.getEmail());
					response.put("mensaje", "Login correcto");
					response.put("email", usuario.getEmail());
					response.put("nombre", usuario.getNombre());
					response.put("id", String.valueOf(usuario.getId()));
					response.put("token", token);
					response.put("rol", usuario.getRol());
					return ResponseEntity.ok(response);
				}
			}
			response.put("mensaje", "Credenciales inválidas");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
		} catch (Exception e) {
			response.put("mensaje", "Error interno del servidor");
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}
}
