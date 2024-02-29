import { Component, OnInit } from '@angular/core';
import { ExcluirFinalizadasDialogComponent } from './excluir-finalizadas-dialog/excluir-finalizadas-dialog.component';
import { ExcluirTodasFinalizadasDialogComponent } from './excluir-todas-finalizadas-dialog/excluir-todas-finalizadas-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TarefaService } from 'src/app/services/tarefa.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tarefas-finalizadas',
  templateUrl: './tarefas-finalizadas.component.html',
  styleUrls: ['./tarefas-finalizadas.component.scss']
})
export class TarefasFinalizadasComponent implements OnInit {

  tarefasFinalizadas: any = [];
  displayedColumns: string[] = ['descricao', 'buttons'];
  dataSource: any;

  constructor(private service: TarefaService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.obterTarefasFinalizadas();
  }

  obterTarefasFinalizadas() {
    return this.service.getFinalizados().subscribe((dados) => {
      this.tarefasFinalizadas = dados;
      this.dataSource = new MatTableDataSource(this.tarefasFinalizadas);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openSnackBar(mensagem: string) {
    this._snackBar.open(mensagem, 'Ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000
    });
  }

 
  excluirDialog(tarefa: any): void {
    const dialogRef = this.dialog.open(ExcluirFinalizadasDialogComponent, {
      width: '500px',
      data: tarefa
    });
    dialogRef.afterClosed().subscribe({
      next: () => {
        this.obterTarefasFinalizadas();
      }
    })

    dialogRef.componentInstance.salvarClicado.subscribe((mensagem: string) => {
      this.openSnackBar(mensagem);
    })
  }

  excluirTodosDialog(): void {
    const dialogRef = this.dialog.open(ExcluirTodasFinalizadasDialogComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe({
      next: () => {
        this.obterTarefasFinalizadas();
      }
    })

    dialogRef.componentInstance.salvarClicado.subscribe((mensagem: string) => {
      this.openSnackBar(mensagem);
    })
  }
}