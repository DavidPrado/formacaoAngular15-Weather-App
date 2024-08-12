import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//@Injectable é um decorator, quer dizer que essa classe pode ser injetada em um componente
// se o parametro providedIn estiver como 'root' quer dizer que ela pode ser injetada em qualquer componente da aplicação
// por padrão essa propriedade não é alterada
@Injectable({
  providedIn: 'root'
})
export class WheaterService {
  //chave de acesso ao https://home.openweathermap.org/
  private apiKey = '4aa26c570ad6cfde083530a8570e445c';

  //Ao chamar está classe o primeiro metodo a ser excecutado é o constructor
  // private http: HttpClient : faz a injeção de dependencia na classe no constructor
  constructor(private http: HttpClient) { }

  getWeatherDatas(cityName: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`, {})
  }
}
