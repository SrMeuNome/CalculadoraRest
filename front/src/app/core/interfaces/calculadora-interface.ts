export interface Calculadora{
    numero1: number;
    numero2: number;
    tiposCalculos: TiposCalculos;
}

export enum TiposCalculos{
    SOMAR,
    SUBTRAIR,
    MULTIPLICAR,
    DIVIDIR
}