import {Component, OnInit} from '@angular/core';
import {CadastroFormComponent} from "../cadastro-form/cadastro-form.component";
import {UsuarioService} from "../../services/usuario.service";
import {CommonModule} from "@angular/common";
import {NgxMaskPipe} from "ngx-mask";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CadastroFormComponent,
    CommonModule,
    NgxMaskPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  pessoas: any[] = [];
  pessoaSelected: any = null;

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.listarPessoas();
  }

  listarPessoas() {
    this.usuarioService.listarPessoas().subscribe(value => {
      this.pessoas = value.dados
    })
  }

  editarPessoa(params: any) {
    this.pessoaSelected = params;
  }

  excluirPessoa(id: number) {
    this.usuarioService.excluirPessoa(id)
      .subscribe(value => this.onAtualizarTabela())
  }

  onAtualizarTabela() {
    this.listarPessoas();
    this.pessoaSelected = null;
  }

}
