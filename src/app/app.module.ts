import { LancamentosService } from "./lancamentos/lancamentos.service";
import { NgModule, Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { CurrencyMaskModule } from "ng2-currency-mask";

import { LancamnetosModule } from "./lancamentos/lancamentos.module";
import { PessoasModule } from "./pessoas/pessoas.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CampoColoridoDirective } from "./campo-colorido.directive";
import { CoreModule } from "./core/core.module";
import { AuthModule } from "./auth/auth.module";

@NgModule({
  declarations: [AppComponent, CampoColoridoDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CurrencyMaskModule,
    FormsModule,
    PessoasModule,
    LancamnetosModule,
    CoreModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [LancamentosService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
