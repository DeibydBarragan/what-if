package com.datastructures.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StoryController {

    @GetMapping("/saludo")
    public String saludo () {
        return "!Hola, mundo!";
    }
}
