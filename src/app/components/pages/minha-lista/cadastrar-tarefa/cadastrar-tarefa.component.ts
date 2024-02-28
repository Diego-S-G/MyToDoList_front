import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.scss']
})
export class CadastrarTarefaComponent {
  form: FormGroup = this.montarForm();

  @Output() salvarClicado = new EventEmitter<string>();

  constructor(public dialogRef: MatDialogRef<CadastrarTarefaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private service: TarefaService,
  ) {}

  montarForm() {
    return this.formBuilder.group({
      descricao: ['',[Validators.required]],
    })
  }

  gravar() {
    if (this.form.valid) {
      var entity = this.form.value
      this.service.post(entity).subscribe(() => {
        this.limparForm();
        this.fecharDialog();
      })
    }
    else {
      this.salvarClicado.emit('Por favor preencha o campo "Descrição"');
    }
  }

  limparForm() {
    this.form.reset();
  }

  fecharDialog(): void {
    this.dialogRef.close();
    this.salvarClicado.emit('Tarefa cadastrada com sucesso!');
  }
}
