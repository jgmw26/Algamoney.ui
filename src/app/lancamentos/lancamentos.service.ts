import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { stringify } from "querystring";

export interface LancamentoFiltro {
  descricao: string;
}

@Injectable({ providedIn: "root" })
export class LancamentosService {
  constructor(private http: HttpClient) {}

  consultar(): Promise<any> {
    const headers = new HttpHeaders();
    headers.append("Authorization", "Content-Type");
    headers.append("Authorization", "");
    return this.http.get("http://localhost:8081/lancamentos").toPromise();
  }

  pesquisa(filtro: any): Promise<any> {
    const params = new HttpParams();
    const headers = new HttpHeaders();

    if (filtro.descricao) {
      params.set("descricao", filtro.descricao);
    }

    headers.append("Authorization", "Content-Type");
    return this.http
      .get("http://localhost:8081/lancamentos", { headers, params: filtro })
      .toPromise();
  }

  adiciona(lancamento: any): Promise<any> {
    const headers = new HttpHeaders();
    headers.append("Authorization", "Content-Type");
    return this.http
      .post("http://localhost:8081/lancamentos", { headers }, lancamento)
      .toPromise();
  }
}
