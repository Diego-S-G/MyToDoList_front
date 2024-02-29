import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-excluir-todas-finalizadas-dialog',
  templateUrl: './excluir-todas-finalizadas-dialog.component.html',
  styleUrls: ['./excluir-todas-finalizadas-dialog.component.scss']
})
export class ExcluirTodasFinalizadasDialogComponent {

  @Output() salvarClicado = new EventEmitter<string>();

  constructor(public dialogRef: MatDialogRef<ExcluirTodasFinalizadasDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: TarefaService) { }

  excluirTodos() {
    return this.service.deleteAll().subscribe(() => {
      this.fecharDialog();
    });
  }

  fecharDialog(): void {
    this.dialogRef.close();
    this.salvarClicado.emit('Todas as tarefas foram excluídos com sucesso!');
  }
}