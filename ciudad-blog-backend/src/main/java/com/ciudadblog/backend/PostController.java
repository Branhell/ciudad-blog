package com.ciudadblog.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200") // 👈 habilita CORS para este controlador
@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping
    public List<Post> obtenerPosts() {
        return postRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Post> crearPost(@RequestBody Post nuevoPost) {
        Usuario autorCompleto = usuarioRepository.findById(nuevoPost.getAutor().getId()).orElse(null);
        if (autorCompleto == null) {
            return ResponseEntity.badRequest().build();
        }
        nuevoPost.setAutor(autorCompleto);

        // Moderación automática
        if (contienePalabrasProhibidas(nuevoPost.getContenido())) {
            nuevoPost.setAprobado(false);
        } else {
            nuevoPost.setAprobado(true);
        }

        // Valores por defecto
        if (nuevoPost.getAnonimo() == null) nuevoPost.setAnonimo(false);
        if (nuevoPost.getLikes() == null) nuevoPost.setLikes(0);
        if (nuevoPost.getComentariosCount() == null) nuevoPost.setComentariosCount(0);
        if (nuevoPost.getCategoria() == null) nuevoPost.setCategoria("EXPRESATE");

        Post postGuardado = postRepository.save(nuevoPost);
        return ResponseEntity.ok(postGuardado);
    }

    @PutMapping("/{id}/solicitar-eliminacion")
    public ResponseEntity<Void> solicitarEliminacion(@PathVariable Long id) {
        Optional<Post> optionalPost = postRepository.findById(id);

        if (optionalPost.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Post post = optionalPost.get();
        post.setSolicitudEliminacion(true);
        postRepository.save(post);

        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}/like")
    public ResponseEntity<Post> darLike(@PathVariable Long id) {
        Optional<Post> optionalPost = postRepository.findById(id);
        if (optionalPost.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Post post = optionalPost.get();
        post.setLikes(post.getLikes() + 1);
        postRepository.save(post);
        return ResponseEntity.ok(post);
    }

    @PutMapping("/{id}/comentario")
    public ResponseEntity<Post> agregarComentario(@PathVariable Long id) {
        Optional<Post> optionalPost = postRepository.findById(id);
        if (optionalPost.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Post post = optionalPost.get();
        post.setComentariosCount(post.getComentariosCount() + 1);
        postRepository.save(post);
        return ResponseEntity.ok(post);
    }

    // 👇 Método privado para moderación automática
    private boolean contienePalabrasProhibidas(String texto) {
        List<String> prohibidas = List.of("insulto", "violencia", "spam");
        return prohibidas.stream().anyMatch(texto.toLowerCase()::contains);
    }

    // 👇 Método DELETE correcto
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id) {
        if (postRepository.existsById(id)) {
            postRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
