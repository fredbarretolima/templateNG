import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FluxoCaixaComponent } from './fluxo-caixa/fluxo-caixa.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { ClientesComponent } from './clientes/clientes.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'fluxocaixa', component: FluxoCaixaComponent },
  { path: 'faleconosco', component: FaleConoscoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
