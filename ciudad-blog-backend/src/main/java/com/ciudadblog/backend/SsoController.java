package com.ciudadblog.backend;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

@RestController
@RequestMapping("/session")
public class SsoController {

    private static final String SSO_SECRET = "*oasis.neurozenith";

    @GetMapping("/sso_provider")
    public ResponseEntity<?> ssoProvider(@RequestParam("sso") String sso,
                                         @RequestParam("sig") String sig) throws Exception {
        // 1. Validar firma
        String expectedSig = hmacSha256(sso, SSO_SECRET);
        if (!expectedSig.equals(sig)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Firma inválida");
        }

        // 2. Decodificar payload
        String decoded = new String(Base64.getDecoder().decode(sso), StandardCharsets.UTF_8);
        // Aquí parseas nonce y return_sso_url
        String nonce = extraerNonce(decoded);
        String returnUrl = extraerReturnUrl(decoded);

        // 3. Construir respuesta con datos del usuario autenticado
        String payload = "nonce=" + nonce
                + "&email=" + URLEncoder.encode("lenylove11@gmail.com", "UTF-8")
                + "&external_id=" + URLEncoder.encode("66", "UTF-8")
                + "&username=" + URLEncoder.encode("brayan.mejia", "UTF-8");

        String base64Payload = Base64.getEncoder().encodeToString(payload.getBytes(StandardCharsets.UTF_8));
        String payloadSig = hmacSha256(base64Payload, SSO_SECRET);

        // 4. Redirigir a Discourse
        String redirectUrl = returnUrl + "?sso=" + URLEncoder.encode(base64Payload, "UTF-8")
                + "&sig=" + payloadSig;

        return ResponseEntity.status(HttpStatus.FOUND).header("Location", redirectUrl).build();
    }

    private String hmacSha256(String data, String secret) throws Exception {
        Mac mac = Mac.getInstance("HmacSHA256");
        mac.init(new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), "HmacSHA256"));
        byte[] hash = mac.doFinal(data.getBytes(StandardCharsets.UTF_8));
        StringBuilder sb = new StringBuilder();
        for (byte b : hash) {
            sb.append(String.format("%02x", b));
        }
        return sb.toString();
    }

    // Métodos auxiliares para extraer nonce y return_sso_url del payload
    private String extraerNonce(String decoded) {
        // ejemplo simple: buscar "nonce="
        return decoded.split("nonce=")[1].split("&")[0];
    }

    private String extraerReturnUrl(String decoded) {
        return decoded.split("return_sso_url=")[1].split("&")[0];
    }
}
