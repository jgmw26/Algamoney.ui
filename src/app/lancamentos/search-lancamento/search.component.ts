import { Lancamentos } from './../../app.component';
import { LancamentosService } from './../lancamentos.service';
import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-search-lancamento',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchLancamentoComponent implements OnInit {


  lancamentos: any[];

  row: any;

  descricao: string;

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

  constructor(private lancamentosService: LancamentosService) {
  }

  ngOnInit(): void {
    this.consultar();
  }

  pesquisar() {
    this.lancamentosService.pesquisa({ descricao: this.descricao })
    .then(lancamentos => this.lancamentos = lancamentos.content);
  }

  consultar() {
    this.lancamentosService.consultar()
    .then(lancamentos => this.lancamentos = lancamentos.content);
  }
}
