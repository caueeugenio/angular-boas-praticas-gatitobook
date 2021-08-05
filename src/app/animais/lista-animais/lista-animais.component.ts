import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Animais } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  //o !: é ppra dizer que nos nao vamos atribuir nada a ele agr, somente no ngOnInit
  animais!: Animais;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.animais = this.activatedRoute.snapshot.data['animais'];
    });

    // this.usuarioService.retornaUsuario().subscribe((usuario) =>{
    //   //caso o userName for undefined ou nulo eu quero atribuir aspas simples(string)
    //   const userName = usuario.name ??  '';
    //   this.animaisService.listaDoUsuario(userName).subscribe((animais) =>{
    //     this.animais = animais;
    //   })
    // })
  }
}
