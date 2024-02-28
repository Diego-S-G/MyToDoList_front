import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.scss']
})
export class EditarTarefaComponent implements OnInit {
  form: FormGroup = this.montarForm();

  @Output() salvarClicado = new EventEmitter<string>();

  montarForm() {
    return this.formBuilder.group({
      id: [0],
      descricao: ['', [Validators.required]],
    })
  }

  carregarFormTela() {
    const dados = {
      id: this.data.id,
      descricao: this.data.descricao,
      finalizado: this.data.finalizado
    }
    this.form.patchValue(dados);
  }

  salvar() {
    var entity = this.form.value
    this.service.put(entity).subscribe(() => {
      this.limparForm();
      this.fecharDialog();
    });
  }

  limparForm() {
    this.form.reset();
  }

  constructor(public dialogRef: MatDialogRef<EditarTarefaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private service: TarefaService) { }


  ngOnInit(): void {
    this.carregarFormTela();
  }

  fecharDialog(): void {
    this.dialogRef.close();
    this.salvarClicado.emit('Tarefa editada com sucesso!');
  }
}

