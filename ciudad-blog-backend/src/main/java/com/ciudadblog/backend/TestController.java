package com.ciudadblog.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/")
    public String home() {
        return "Backend funcionando correctamente 🚀";
    }

    @GetMapping("/api/test")
    public String test() {
        return "API OK ✅";
    }
}