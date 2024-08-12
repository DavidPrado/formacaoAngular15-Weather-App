import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WheaterHomeComponent } from './modules/wheater/page/wheater-home/wheater-home.component';

//Definiar as rotas
const routes: Routes = [
  {
    //quando o caminho for vazio define a rota ao iniciar a aplicação redirecionar para a rota weather
    path:'',
    redirectTo: 'weather',
    pathMatch : 'full'
  },
  { // define a rota weather e aponta para o componente WheaterHomeComponent
    path: 'weather',
    component: WheaterHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
