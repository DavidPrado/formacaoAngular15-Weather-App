import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"; //animações do navegado
import {HttpClientModule} from "@angular/common/http"; //modulo para fazer requisições ao backend ou outras funções exterios ao sistema

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; //modulo de importação de formularios mais simples
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WheaterHomeComponent } from './modules/wheater/page/wheater-home/wheater-home.component';
import { WeatherCardComponent } from './modules/wheater/components/weather-card/weather-card.component';

@NgModule({
  declarations: [ //declaração de um componente
    AppComponent, WheaterHomeComponent, WeatherCardComponent
  ],
  imports: [ //importações que um componente precisa
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [], //serviços injetos do componente
  bootstrap: [AppComponent] //componente principal para iniciar a aplicação
})
export class AppModule { }
