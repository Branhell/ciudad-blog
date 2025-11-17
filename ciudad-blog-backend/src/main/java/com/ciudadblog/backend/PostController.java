package com.ciudadblog.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;
import org.springframework.http.ResponseEntity;

import java.util.List;

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
    public Post crearPost(@RequestBody Post nuevoPost) {
        // Buscar el autor completo en la base usando su ID
        Usuario autorCompleto = usuarioRepository.findById(nuevoPost.getAutor().getId()).orElse(null);
        nuevoPost.setAutor(autorCompleto);

        // Guardar el post con el autor completo
        Post postGuardado = postRepository.save(nuevoPost);

        // Volver a buscar el post para que venga con todos los datos
        return postRepository.findById(postGuardado.getId()).orElse(null);
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

}
