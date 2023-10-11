import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../Models/Usuario.models';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.page.html',
  styleUrls: ['./alterar-usuario.page.scss'],
})
export class AlterarUsuarioPage implements OnInit {

  usuario!: Usuario;

  constructor(
    private activateRoute: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router 
    ) { }

  ngOnInit() {

    const id = Number(this.activateRoute.snapshot.paramMap.get('id'));

    this.usuarioService.getOne(id).subscribe(retorno => {
        this.usuario = retorno;
        console.log(this.usuario);
    });
  }

}
