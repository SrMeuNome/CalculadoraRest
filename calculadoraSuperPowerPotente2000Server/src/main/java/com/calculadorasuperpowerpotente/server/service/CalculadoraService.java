package com.calculadorasuperpowerpotente.server.service;

import com.calculadorasuperpowerpotente.server.dto.Calculadora;
import com.calculadorasuperpowerpotente.server.dto.Resposta;

public interface CalculadoraService
{
    Resposta calcular( Calculadora calculadora );
}
