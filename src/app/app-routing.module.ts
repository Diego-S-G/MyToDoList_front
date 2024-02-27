import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { MinhaListaComponent } from './components/pages/minha-lista/minha-lista.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'minha-lista', component: MinhaListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
