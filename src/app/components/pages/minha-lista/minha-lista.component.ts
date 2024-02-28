import { Component } from '@angular/core';
import { TarefaService } from 'src/app/services/tarefa.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';

@Component({
  selector: 'app-minha-lista',
  templateUrl: './minha-lista.component.html',
  styleUrls: ['./minha-lista.component.scss']
})
export class MinhaListaComponent {
  constructor(private service: TarefaService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) { }

    // ngOnInit(): void {
    //   this.obterTarefas();
    // }
  

  cadastrarDialog() {
    const dialogRef = this.dialog.open(CadastrarTarefaComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe({
      next: () => {
        // this.obterTarefas();
      }
    })

    dialogRef.componentInstance.salvarClicado.subscribe((mensagem: string) => {
      this.openSnackBar(mensagem);
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
