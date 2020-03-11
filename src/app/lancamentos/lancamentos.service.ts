import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { take } from "rxjs/operators";
import { stringify } from "querystring";

export interface LancamentoFiltro {
  descricao: string;
}

@Injectable({ providedIn: "root" })
export class LancamentosService {
  constructor(private http: HttpClient) {}

  API = "http://localhost:8081/lancamentos";

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

  deletar(id: Number) {
    const headers = new HttpHeaders();
    headers.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUEkgZG8gRsOzcnVtIGRhIEFsdXJhIiwic3ViIjoiMSIsImlhdCI6MTU4Mzk0Njc1MywiZXhwIjoxNTg0MDMzMTUzfQ.OBo3v2AANMkeeZX7rHM2N0OXMim_mYUxrxnP_08dnDo"
    );
    return this.http
      .delete(`${this.API}/${id}`, {
        headers
      })
      .pipe(take(1));
  }
}
