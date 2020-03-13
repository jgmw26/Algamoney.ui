import { AuthUserComponent } from './auth/auth-user/auth-user.component';
import { SearchLancamentoComponent } from "./lancamentos/search-lancamento/search.component";
import { LancamentoCadastroComponent } from "./lancamentos/cadastro-lancamento/lancamento-cadastro.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "cadastro",
    component: LancamentoCadastroComponent,
    data: { title: "Cadastro de Lancamentos" }
  },
  { path: "search", component: SearchLancamentoComponent },
  { path: "login", component: AuthUserComponent },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
    canDeactivate:["search","cadastro"]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
