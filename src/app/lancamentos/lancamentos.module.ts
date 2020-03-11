import { AppRoutingModule } from "./../app-routing.module";
import { LancamentoCadastroComponent } from "./cadastro-lancamento/lancamento-cadastro.component";
import { TableLancamentoComponent } from "./table-lancamento/table.component";
import { SearchLancamentoComponent } from "./search-lancamento/search.component";
import { LancamentosService } from "./lancamentos.service";

import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material";

import { CurrencyMaskModule } from "ng2-currency-mask";

import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputTextareaModule } from "primeng/inputtextarea";
import { SelectButtonModule } from "primeng/selectbutton";
import { CalendarModule } from "primeng/calendar";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { PaginatorModule } from "primeng/paginator";
import { TableModule } from "primeng/table";
import { TooltipModule } from "primeng/tooltip";
import { SharedModule } from "../shared/shared.module";
import { CoreModule } from "../core/core.module";

@NgModule({
  declarations: [
    TableLancamentoComponent,
    LancamentoCadastroComponent,
    SearchLancamentoComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    TooltipModule,
    InputTextareaModule,
    SelectButtonModule,
    BrowserAnimationsModule,
    CalendarModule,
    DropdownModule,
    InputMaskModule,
    CurrencyMaskModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    MatTableModule,
    CoreModule
  ],
  providers: [LancamentosService],
  exports: [
    TableLancamentoComponent,
    LancamentoCadastroComponent,
    SearchLancamentoComponent
  ]
})
export class LancamnetosModule {}
