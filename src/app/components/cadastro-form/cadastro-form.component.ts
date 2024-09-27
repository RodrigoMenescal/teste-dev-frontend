import {Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMaskDirective, NgxMaskPipe} from "ngx-mask";
import {UsuarioService} from "../../services/usuario.service";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-cadastro-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  templateUrl: './cadastro-form.component.html',
  styleUrl: './cadastro-form.component.css'
})
export class CadastroFormComponent implements OnInit, OnChanges {
  constructor(private usuarioService: UsuarioService) {
  }

  @Input() pessoa: any;
  @Output() atualizarTabela = new EventEmitter<void>();

  pessoaForm = new FormGroup({
    nome: new FormControl<string>(''),
    telefone: new FormControl<string>(''),
  })

  ngOnInit() {
    if (this.pessoa) {
      this.pessoaForm.patchValue(this.pessoa);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['pessoa'] && this.pessoa) {
      this.pessoaForm.patchValue(this.pessoa);
    }
  }

  onSubmit() {
    if (this.pessoa) {
      this.usuarioService.atualizarPessoa(this.pessoa.id, this.pessoaForm.value)
        .subscribe(value => {
          this.pessoaForm.reset();
          this.atualizarTabela.emit();
        })
    } else {
      this.usuarioService.salvarPessoa(this.pessoaForm.value)
        .subscribe(value => {
          this.pessoaForm.reset();
          this.atualizarTabela.emit();
        })
    }
  }
}
