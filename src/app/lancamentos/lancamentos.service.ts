import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { take } from "rxjs/operators";
import { stringify } from "querystring";
import { Observable } from "rxjs";

export interface LancamentoFiltro {
  descricao: string;
}

@Injectable({ providedIn: "root" })
export class LancamentosService {
  constructor(private http: HttpClient) {}

  API = "http://localhost:8080/lancamentos";

  consultar(): Promise<any> {
    const headers = new HttpHeaders();
    headers.append("Authorization", "Content-Type");
    headers.append("Authorization", [
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUEkgZG8gRsOzcnVtIGRhIEFsdXJhIiwic3ViIjoiMSIsImlhdCI6MTU4NDAzMTQxMCwiZXhwIjoxNTg0MTE3ODEwfQ.WZJ606jtnuGc0Iyz-Zx-IL7FmC12kKjr9zHVBZwEnRY"
    ]);
    return this.http.get("http://localhost:8080/lancamentos").toPromise();
  }

  pesquisa(filtro: any): Promise<any> {
    const params = new HttpParams();
    const headers = new HttpHeaders();

    if (filtro.descricao) {
      params.set("descricao", filtro.descricao);
    }

    headers.append("Authorization", "Content-Type");
    headers.append("Authorization", [
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUEkgZG8gRsOzcnVtIGRhIEFsdXJhIiwic3ViIjoiMSIsImlhdCI6MTU4NDAzMTQxMCwiZXhwIjoxNTg0MTE3ODEwfQ.WZJ606jtnuGc0Iyz-Zx-IL7FmC12kKjr9zHVBZwEnRY"
    ]);

    return this.http
      .get(`${this.API}`, { headers, params: filtro })
      .toPromise();
  }

  adiciona(lancamento: any): Promise<any> {
    const headers = new HttpHeaders();
    headers.append("Authorization", "Content-Type");
    headers.append("Authorization", [
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUEkgZG8gRsOzcnVtIGRhIEFsdXJhIiwic3ViIjoiMSIsImlhdCI6MTU4NDAzMTQxMCwiZXhwIjoxNTg0MTE3ODEwfQ.WZJ606jtnuGc0Iyz-Zx-IL7FmC12kKjr9zHVBZwEnRY"
    ]);

    return this.http.post(`${this.API}`, { headers }, lancamento).toPromise();
  }

  deletar(id: number) {
    const headers = new HttpHeaders({"Authorization":
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUEkgZG8gRsOzcnVtIGRhIEFsdXJhIiwic3ViIjoiMSIsImlhdCI6MTU4NDAzMTQxMCwiZXhwIjoxNTg0MTE3ODEwfQ.WZJ606jtnuGc0Iyz-Zx-IL7FmC12kKjr9zHVBZwEnRY"
    });
    headers.append("Content-Type", "application/json");
    return this.http
      .delete(`${this.API}/${id}`, {
        headers
      })
      .pipe(take(1));
  }
}
