import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../core/services/calculadora.service';
import { Calculadora, TiposCalculos } from '../core/interfaces/calculadora-interface'

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  num: string[] = ['0', '0'];
  selectedNum: number = 0;
  operacao: string | undefined = '+';
  result: number = 0;
  calculadora: Calculadora = <Calculadora> {}

  operacoes: Array<string> = ['+', '-', '*', ':']

  constructor( private service: CalculadoraService ) { }

  ngOnInit(): void {
  }

  setNum(event: string): void{
    let operator = this.operacoes.find((operacao) => operacao === event)
    if(typeof(operator) != typeof(undefined)){
      this.operacao = operator;
    } else if(event === '='){
      this.calculadora.numero1 = +this.num[0];
      this.calculadora.numero2 = +this.num[1];
      this.calculadora.tiposCalculos = this.getOperacaoTipo(this.operacao);
      this.service.sendOperation(this.calculadora).subscribe(data => {
        this.result = data.resultado;
      })
    } else if(event === 'Enter'){
      switch(this.selectedNum){
        case 0:
          this.selectedNum = 1
          break;
        case 1:
          this.selectedNum = 0
          break;
      }
    } else if(event === 'Backspace'){
      let tamanho = this.num[this.selectedNum].length
      this.num[this.selectedNum] = this.num[this.selectedNum].substring(0, tamanho - 1)
    }
    else {
      if(this.num[this.selectedNum] === '0'){
        this.num[this.selectedNum] = event
      }else {
        this.num[this.selectedNum] = `${this.num[this.selectedNum]}${event}`
      }
    }
  }

  getOperacaoTipo(operacao: string | undefined): TiposCalculos{
    switch(operacao){
      case '+':
        return TiposCalculos.SOMAR
        break;
      case '-':
        return TiposCalculos.SUBTRAIR
        break;
      case '*':
        return TiposCalculos.MULTIPLICAR
        break;
      case ':':
        return TiposCalculos.DIVIDIR
        break;
      default:
        return TiposCalculos.SOMAR
        break;
    }
  }

}
