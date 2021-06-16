package com.calculadorasuperpowerpotente.server.dto;

import java.io.Serializable;
import java.util.Objects;

public class Resposta implements Serializable
{
    private double resultado;

    public Resposta() { }

    public double getResultado()
    {
        return resultado;
    }

    public void setResultado(double resultado)
    {
        this.resultado = resultado;
    }

    @Override
    public boolean equals(Object o)
    {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Resposta resposta = (Resposta) o;
        return Double.compare(resposta.resultado, resultado) == 0;
    }

    @Override
    public int hashCode()
    {
        return Objects.hash(resultado);
    }
}
