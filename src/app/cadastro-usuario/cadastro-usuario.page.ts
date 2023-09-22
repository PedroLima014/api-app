import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Models/Usuario.models';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

  usuario: Usuario = {
    nome: '',
    email:'',
    senha:''
  };

  confirmarSenha = '';

  constructor(private userService: UsuarioService) { }

  ngOnInit() {
  }

  salvarUsuario(){

  if(this.confirmarSenha.trim() && this.usuario.senha.trim()){

    if(this.confirmarSenha.trim() == this.usuario.senha.trim()){
      this.userService.salvar(this.usuario).subscribe(retorno =>{
        this.usuario = retorno;
        alert("SUCESSO! O Usuario ["+ this.usuario.id +"] foi salvo!");
      });

    }else{
      alert("As senhas devem ser iguais!");
    }

    }else{
      alert("OS campos de senha são obrigatórios!");
    }

  }

}
