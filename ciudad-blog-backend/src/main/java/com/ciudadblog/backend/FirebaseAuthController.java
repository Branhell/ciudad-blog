package com.ciudadblog.backend;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class FirebaseAuthController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/firebase")
    public ResponseEntity<?> loginWithFirebase(@RequestBody Map<String, String> body) {
        String token = body.get("token");

        try {
            FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(token);
            String email = decodedToken.getEmail();
            String nombre = decodedToken.getName();

            Optional<Usuario> usuarioOpt = usuarioRepository.findByEmail(email);
            Usuario usuario;

            if (usuarioOpt.isPresent()) {
                usuario = usuarioOpt.get();
            } else {
                usuario = new Usuario();
                usuario.setEmail(email);
                usuario.setNombre(nombre != null ? nombre : email.split("@")[0]);
                usuario.setRol("PACIENTE");
                usuario.setPassword("");
                usuario = usuarioRepository.save(usuario);
            }

            String jwt = jwtUtil.generateToken(usuario.getEmail());

            Map<String, Object> response = new HashMap<>();
            response.put("token", jwt);
            response.put("rol", usuario.getRol());
            response.put("email", usuario.getEmail());
            response.put("nombre", usuario.getNombre());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            return ResponseEntity.status(401).body("Token inválido: " + e.getMessage());
        }
    }
}