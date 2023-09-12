import { Injectable } from '@angular/core';
import { Usuario } from '../Models/Usuario.models';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  public listaUsuario: Usuario[] = [];
  private url = 'http://localhost:3000/usuarios'

  constructor(private http: HttpClient) { }


  public getAll(){
    return this.htpp.get(this.url);
  }

  public getOne(id: number){
    return this.http.get(`${this.url}\${id}`);
  }
}
