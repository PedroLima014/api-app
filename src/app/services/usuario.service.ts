import { Injectable } from '@angular/core';
import { Usuario } from '../Models/Usuario.models';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  public listaUsuario: Usuario[] = [];
  private url = 'http://localhost:3000/usuarios'

  constructor(private http: HttpClient) { }


  public getAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  public getOne(id: number): Observable<Usuario[]>{
    return this.http.get<Usuario>(`${this.url}\${id}`).pipe(
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

  salvar(usuario: Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url, usuario).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }
}
