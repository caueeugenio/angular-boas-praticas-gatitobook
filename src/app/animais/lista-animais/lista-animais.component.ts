import { Component, OnInit } from '@angular/core';
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
  animais$ !: Observable<Animais>;

  constructor(
    private usuarioService: UsuarioService,
    private animaisService: AnimaisService
  ) {}

  ngOnInit(): void {
    this.animais$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario)=>{
        const userName = usuario.name ??  '';
        return this.animaisService.listaDoUsuario(userName);
      })
    );
    // this.usuarioService.retornaUsuario().subscribe((usuario) =>{
    //   //caso o userName for undefined ou nulo eu quero atribuir aspas simples(string)
    //   const userName = usuario.name ??  '';
    //   this.animaisService.listaDoUsuario(userName).subscribe((animais) =>{
    //     this.animais = animais;
    //   })
    // })
  }
}
