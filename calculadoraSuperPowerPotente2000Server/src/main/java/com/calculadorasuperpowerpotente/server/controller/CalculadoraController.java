package com.calculadorasuperpowerpotente.server.controller;

import com.calculadorasuperpowerpotente.server.dto.Calculadora;
import com.calculadorasuperpowerpotente.server.dto.Resposta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.calculadorasuperpowerpotente.server.service.CalculadoraService;

@RestController
@RequestMapping("/api/calcular")
@CrossOrigin(origins = "*")
public class CalculadoraController
{
    private final CalculadoraService calculadoraService;

    @Autowired
    CalculadoraController(CalculadoraService calculadoraService)
    {
        this.calculadoraService = calculadoraService;
    }
    
    @PostMapping
    public Resposta calcular(@RequestBody Calculadora calculadora)
    {
        return calculadoraService.calcular(calculadora);
    }
}
