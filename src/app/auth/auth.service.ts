import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  API = "http://localhost:8080/auth";

  autenticacao(email: string, senha: string) {

    return this.http.post<any>(`${this.API}`, {email, senha}, {observe: 'response'})
    .pipe(map(res => {
      sessionStorage.setItem('email',email);
      let tokenAuth = 'Bearer ' + res;
      sessionStorage.setItem('token',tokenAuth)

      // const authToken = res.headers.get('Bearer');
      // window.localStorage.setItem('Token', authToken);
      // console.log(authToken);
    }));


  }

}
