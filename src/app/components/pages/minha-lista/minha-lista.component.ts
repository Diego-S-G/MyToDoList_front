import { Component, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/services/tarefa.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';
import { ExcluirTarefaComponent } from './excluir-tarefa/excluir-tarefa.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';

@Component({
  selector: 'app-minha-lista',
  templateUrl: './minha-lista.component.html',
  styleUrls: ['./minha-lista.component.scss']
})
export class MinhaListaComponent implements OnInit {

  tarefas: any = [];

  constructor(private service: TarefaService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.obterTarefas();
  }

  obterTarefas() {
    return this.service.getNaoFinalizados().subscribe((dados) => {
      this.tarefas = dados;
    });
  }

  cadastrarDialog() {
    const dialogRef = this.dialog.open(CadastrarTarefaComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe({
      next: () => {
        this.obterTarefas();
      }
    })

    dialogRef.componentInstance.salvarClicado.subscribe((mensagem: string) => {
      this.openSnackBar(mensagem);
    })
  }

  editarDialog(tarefa: any): void {
    const dialogRef = this.dialog.open(EditarTarefaComponent, {
      width: '500px',
      data: tarefa
    });
    dialogRef.afterClosed().subscribe({
      next: () => {
        this.obterTarefas();
      }
    })

    dialogRef.componentInstance.salvarClicado.subscribe((mensagem: string) => {
      this.openSnackBar(mensagem);
    })
  }

  excluirDialog(tarefa: any): void {
    const dialogRef = this.dialog.open(ExcluirTarefaComponent, {
      width: '500px',
      data: tarefa
    });
    dialogRef.afterClosed().subscribe({
      next: () => {
        this.obterTarefas();
      }
    })

    dialogRef.componentInstance.salvarClicado.subscribe((mensagem: string) => {
      this.openSnackBar(mensagem);
    })
  }

  finalizarTarefa(tarefa: any): void {
    tarefa.finalizado = true;
    this.service.put(tarefa).subscribe(() => {
      this.openSnackBar('Tarefa finalizada com sucesso. Parabéns!')
      this.obterTarefas();
    })
  }

  openSnackBar(mensagem: string) {
    this._snackBar.open(mensagem, 'Ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000
    });
  }
}
