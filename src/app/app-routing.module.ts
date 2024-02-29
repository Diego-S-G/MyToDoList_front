import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { MinhaListaComponent } from './components/pages/minha-lista/minha-lista.component';
import { TarefasFinalizadasComponent } from './components/pages/tarefas-finalizadas/tarefas-finalizadas.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'minha-lista', component: MinhaListaComponent },
  { path: 'tarefas-finalizadas', component: TarefasFinalizadasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
