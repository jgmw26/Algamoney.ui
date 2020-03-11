import { LancamentosService } from "./../lancamentos.service";
import { Component, Input, OnInit } from "@angular/core";
import { SearchLancamentoComponent } from "../search-lancamento/search.component";

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

  deletar(id: Number) {
    this.lancamentoService.deletar(id).subscribe(
      // success => this.onRefresh(),
      error => alert("Erro ao remover o produto")
    );
  }

  ngOnInit() {}
}
