import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from "../app.tokens";

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {
  endpoint: string = ''

  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) {}

  listar(): Observable<any> {
    return this.http.get(`${this.apiUrl}/${this.endpoint}`);
  }

  salvar(dados: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${this.endpoint}`, dados);
  }

  atualizar(id: number, dados: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${this.endpoint}/${id}`, dados);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${this.endpoint}/${id}`);
  }
}
