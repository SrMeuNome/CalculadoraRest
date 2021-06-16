import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calculadora } from '../interfaces/calculadora-interface';
import { Resposta } from '../interfaces/resposta-interface';
import { ENDPOINTS, HOST } from '../constants/endpoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor( private __http: HttpClient ) { }

  private url: string = `${HOST.HOST}${HOST.API}${ENDPOINTS.CALCULAR}`

  sendOperation(calculadora: Calculadora): Observable<Resposta> {
    return this.__http.post<Resposta>(this.url, calculadora)
  }
}
