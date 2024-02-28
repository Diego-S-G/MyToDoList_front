import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-excluir-tarefa',
  templateUrl: './excluir-tarefa.component.html',
  styleUrls: ['./excluir-tarefa.component.scss']
})
export class ExcluirTarefaComponent implements OnInit {

  @Output() salvarClicado = new EventEmitter<string>();

  id: number = 0;

  constructor(public dialogRef: MatDialogRef<ExcluirTarefaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: TarefaService) { }

  ngOnInit(): void {
    this.id = this.data.id;
  }

  excluir(id: number) {
    return this.service.delete(id).subscribe(() => {
      this.fecharDialog();
    });
  }

  fecharDialog(): void {
    this.dialogRef.close();
    this.salvarClicado.emit('Tarefa excluída com sucesso!');
  }
}
