package com.calculadorasuperpowerpotente.server.dto;


import java.io.Serializable;
import java.util.Objects;

public class Calculadora implements Serializable
{
    private double numero1;
    private double numero2;
    private TiposCalculos tiposCalculos;

    public Calculadora() { }

    public double getNumero1()
    {
        return numero1;
    }

    public void setNumero1(double numero1)
    {
        this.numero1 = numero1;
    }

    public double getNumero2()
    {
        return numero2;
    }

    public void setNumero2(double numero2)
    {
        this.numero2 = numero2;
    }

    public TiposCalculos getTiposCalculos()
    {
        return tiposCalculos;
    }

    public void setTiposCalculos(TiposCalculos tiposCalculos)
    {
        this.tiposCalculos = tiposCalculos;
    }

    @Override
    public boolean equals(Object o)
    {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Calculadora that = (Calculadora) o;
        return Double.compare(that.numero1, numero1) == 0 && Double.compare(that.numero2, numero2) == 0;
    }

    @Override
    public int hashCode()
    {
        return Objects.hash(numero1, numero2);
    }
}
