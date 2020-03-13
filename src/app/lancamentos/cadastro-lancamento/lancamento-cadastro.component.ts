import { LancamentosService } from "./../lancamentos.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ValueConverter } from "@angular/compiler/src/render3/view/template";
import { analyzeAndValidateNgModules } from "@angular/compiler";

@Component({
  selector: "app-lancamento-cadastro",
  templateUrl: "./lancamento-cadastro.component.html",
  styleUrls: ["./lancamento-cadastro.component.css"]
})
export class LancamentoCadastroComponent implements OnInit {
  lancamento: Function;
  categorias: any;
  pessoas: any;

  tipos: [
    { lable: "Receita"; value: "RECEITA" },
    { lable: "Despesa"; value: "DESPESA" }
  ];

  salvar(form: NgForm) {
    form.reset();
  }

  constructor(private lancamentoService: LancamentosService) {
    // this.lancamento({
    //   dataVencimento: Date,
    //   dataInicio: Date,
    //   descricao: String,
    //   observacao: String,
    //   tipo: String,
    //   valor: Number,
    //   categoria: {
    //     id: Number
    //   },
    //   pessoa: {
    //     id: Number
    //   }
    // });
  }

  adicionar() {
    this.lancamentoService.adiciona(this.lancamento);
  }

  consultar() {
    this.lancamentoService
      .consultar()
      .then(lancamentos => (this.lancamento = lancamentos.content));
  }

  ngOnInit(): void {}
}
