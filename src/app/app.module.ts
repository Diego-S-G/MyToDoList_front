import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { MinhaListaComponent } from './components/pages/minha-lista/minha-lista.component';
import { CadastrarTarefaComponent } from './components/pages/minha-lista/cadastrar-tarefa/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './components/pages/minha-lista/editar-tarefa/editar-tarefa.component';
import { ExcluirTarefaComponent } from './components/pages/minha-lista/excluir-tarefa/excluir-tarefa.component';
import { TarefasFinalizadasComponent } from './components/pages/tarefas-finalizadas/tarefas-finalizadas.component';
import { ExcluirFinalizadasDialogComponent } from './components/pages/tarefas-finalizadas/excluir-finalizadas-dialog/excluir-finalizadas-dialog.component';
import { ExcluirTodasFinalizadasDialogComponent } from './components/pages/tarefas-finalizadas/excluir-todas-finalizadas-dialog/excluir-todas-finalizadas-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    MinhaListaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    ExcluirTarefaComponent,
    TarefasFinalizadasComponent,
    ExcluirFinalizadasDialogComponent,
    ExcluirTodasFinalizadasDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
