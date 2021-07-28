import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import  jwt_decode  from 'jwt-decode';
import { Usuario } from './usuario';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({})
  //tipo subject = como se fosse um observable que podemos receber e enviar informacoes
  //behavior subject guarda estado
  //ele precisa comecar com um estado inicial
  constructor(private tokenService: TokenService) {
    if(this.tokenService.possuiToken()){
      this.decodificaJWT();
    }
  }

  private decodificaJWT() {
    const token = this.tokenService.retornaToken();
    //cast para representar um usuario
    const usuario = jwt_decode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario(){
    return this.usuarioSubject.asObservable();
    //estamos enviando como observable para oytros componentes nao terem acesso
  }

  logout(){
    this.tokenService.excluiToken();
    this.usuarioSubject.next({});
  }

  estaLogado(){
    return this.tokenService.possuiToken();
  }

  salvaToken(token:string){
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }
}
