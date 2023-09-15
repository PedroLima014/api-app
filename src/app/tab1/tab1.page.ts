import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../Models/Usuario.models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

listaUsuarios: Usuario[] = [];
usuario?: Usuario;
id = 0;

  constructor(private userService: UsuarioService) {
    
  }

  buscarUsuarios(){
    this.userService.getAll().subscribe(retorno =>{
      // "as Usuario[]" tenta converter o retorno
      this.listaUsuarios = retorno as Usuario[];
      console.log(this.listaUsuarios); // Limpar o Usuario
    });
  }

  buscarPorID(){
    this.userService.getOne(this.id).subscribe(retorno =>{
      console.log(retorno);
      this.usuario = retorno as Usuario;
      this.listaUsuarios = []; // Limpar a lista
    });
  }
}
