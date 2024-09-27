import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { BaseServiceService } from "./base-service.service"
import {Observable} from "rxjs";
import {API_URL} from "../app.tokens";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseServiceService {

  constructor(http: HttpClient, @Inject(API_URL) apiUrl: string) {
    super(http, apiUrl);
  }

  listarPessoas(): Observable<any> {
    this.endpoint = "usuarios"
    return this.listar();
  }

  salvarPessoa(pessoa: any): Observable<String> {
    this.endpoint = "usuario"
    return this.salvar(pessoa);
  }

  atualizarPessoa(id: number, pessoa: any): Observable<String> {
    this.endpoint = "usuario"
    return this.atualizar( id, pessoa);
  }

  excluirPessoa(id: number): Observable<String> {
    this.endpoint = "usuario"
    return this.excluir(id);
  }

}
