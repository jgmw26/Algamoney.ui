import { LancamentosService } from "./../lancamentos.service";
import { Component, Input, OnInit } from "@angular/core";
import { SearchLancamentoComponent } from "../search-lancamento/search.component";
import { error } from "@angular/compiler/src/util";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableLancamentoComponent implements OnInit {
  @Input() lancamentos: any[];

  row = 3;

  constructor(private lancamentoService: LancamentosService) {}

  maisRow() {
    if (this.row >= 20) {
      this.row = 20;
    } else {
      this.row++;
    }
  }
  menosRow() {
    if (this.row <= 1) {
      this.row = 1;
    } else {
      this.row--;
    }
  }

  consultar() {
    this.lancamentoService
      .consultar()
      .then(lancamentos => (this.lancamentos = lancamentos.content));
  }

  deletar(id: number) {
    this.lancamentoService.deletar(id).subscribe(
      succes => this.consultar(),
      error => alert("Erro ao Remover o Lançamento")
    );
  }

  ngOnInit() {}
}
