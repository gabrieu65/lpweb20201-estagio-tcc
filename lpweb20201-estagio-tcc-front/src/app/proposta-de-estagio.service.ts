import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropostaDeEstagio {
  constructor(private http: HttpClient, private auth$: AuthService) { }

  lista() {
    return this.http.get(environment.API_URL.concat('propostas-de-estagio/'), this.auth$.httpOptions());
  }

  get(id) {
    return this.http.get(environment.API_URL.concat(`propostas-de-estagio/${id}/`), this.auth$.httpOptions());
  }
}