import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { TokenService } from './../autenticacao/token.service';
import { Animais, Animal } from './animais';

const API = environment.apiURL;
@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    const token = this.tokenService.retornaToken();

    //a nossa api espera o atributo x-access-token e estamos enviando o token
    const headers = new HttpHeaders().append('x-access-token', token);

    return this.httpClient.get<Animais>(`${API}/${nomeDoUsuario}/photos`, {
      headers,
    });
  }

  buscaPorID(id: number): Observable<Animal> {
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.httpClient.get<Animal>(`${API}/photos/${id}`, { headers });
  }
}
