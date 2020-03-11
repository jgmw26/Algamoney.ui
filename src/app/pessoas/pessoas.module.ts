import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { TablePessoaComponent } from './table-pessoa/table-pessoa.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { DropdownModule } from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { SharedModule } from './../shared/shared.module';



@NgModule({
  declarations: [
    TablePessoaComponent,
    PessoaCadastroComponent
  ],
  imports: [
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
    SharedModule
  ],
  exports: [
    TablePessoaComponent,
    PessoaCadastroComponent
  ]
})
export class PessoasModule { }
