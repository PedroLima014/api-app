import { Injectable } from '@angular/core';
import { Produto } from '../Models/Produto.models';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  public listaProduto: Produto[] = [];
  private url = 'http://localhost:3000/produtos'

  constructor(private http: HttpClient) { }


  public getAll(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  public getOne(id: number): Observable<Produto[]> {
    return this.http.get<Produto>(`${this.url}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }
  

  exibeErro(erro: any):Observable<any>
  {
    console.log(erro);
    alert('Não foi possível atender a sua solicitação!');
    return EMPTY;
  }

  salvar(produto: Produto):Observable<Produto>{
    return this.http.post<Produto>(this.url, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }
}
