import { WheaterService } from './../../services/wheater.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import {WeatherDatas} from 'src/app/models/interfaces/weather.interface'

@Component({
  selector: 'app-wheater-home',
  templateUrl: './wheater-home.component.html',
  styleUrls: []
})

export class WheaterHomeComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject();
  initialCityName = 'São Paulo';
  weatherDatas!: WeatherDatas;
  searchIcon = faMagnifyingGlass;

  constructor(private wheaterService: WheaterService) {}

  //metodo de ciclo de vida do angular
  //Quando ocorre a situação de sair da tela é executado o metodo para não manter a inscrição do observable e destruir este componente
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  //metodo de ciclo de vida do angular
  //toda vez que queremos que um serviço seja executado é utilizado o ngOnInit
  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.wheaterService.getWeatherDatas(cityName)
      .pipe( //antes da inscrição no obsevable informação a desinscrição do metodo para executar o destroy posteriormente
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (response) =>{
            response && (this.weatherDatas = response);
            console.log(this.weatherDatas)
        },
        error: (error) => console.log(error),
      });
  }

  onSubmit(): void {
    this.getWeatherDatas(this.initialCityName);
    console.log(this.initialCityName);
    this.initialCityName = '';
  }

}
