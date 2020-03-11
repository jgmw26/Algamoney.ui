import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-pessoa',
  templateUrl: './table-pessoa.component.html',
  styleUrls: ['./table-pessoa.component.css']
})
export class TablePessoaComponent implements OnInit {

   pessoas: any[];

  row = 3;

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

  ngOnInit() {
    this.pessoas = [
      {nome: 'João Guilherme', logradouro: 'Estrada de Itapecerica', numero: '6305', complemento: 'B 23',
       bairro: 'Capão Redondo', cep: '05858003', cidade: 'São Paulo', estado: 'São Paulo'},

      {nome: 'Sebastião Souza', logradouro: 'Estrada de Itapecerica', numero: '5859', complemento: null,
      bairro: 'Capão Redondo', cep: '05858001', cidade: 'São Paulo', estado: 'São Paulo' },

      {nome: 'Maria Abadia', logradouro: 'Estrada de Itapecerica', numero: '5859', complemento: 'B 23',
      bairro: 'Capão Redondo', cep: '05858001', cidade: 'São Paulo', estado: 'São Paulo' },
    ];
  }
}
