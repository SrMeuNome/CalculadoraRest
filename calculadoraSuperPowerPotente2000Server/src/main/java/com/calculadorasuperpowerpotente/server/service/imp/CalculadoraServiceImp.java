package com.calculadorasuperpowerpotente.server.service.imp;

import com.calculadorasuperpowerpotente.server.dto.Calculadora;
import com.calculadorasuperpowerpotente.server.dto.Resposta;
import org.springframework.stereotype.Service;
import com.calculadorasuperpowerpotente.server.service.CalculadoraService;

@Service
public class CalculadoraServiceImp implements CalculadoraService
{
    @Override
    public Resposta calcular(Calculadora calculadora)
    {
        Resposta resposta = new Resposta();

        switch (calculadora.getTiposCalculos())
        {
            case SOMAR:
                resposta.setResultado(calculadora.getNumero1() + calculadora.getNumero2());
                break;
            case SUBTRAIR:
                resposta.setResultado(calculadora.getNumero1() - calculadora.getNumero2());
                break;
            case MULTIPLICAR:
                resposta.setResultado(calculadora.getNumero1() * calculadora.getNumero2());
                break;
            case DIVIDIR:
                if(calculadora.getNumero2() == 0){
                    resposta.setResultado(0);
                } else{
                    resposta.setResultado(calculadora.getNumero1() / calculadora.getNumero2());
                }
                break;
            default:
                resposta.setResultado(0);
                break;
        }

        return resposta;
    }
}
