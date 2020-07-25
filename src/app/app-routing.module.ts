import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InDevelopmentComponent } from './layout/in-development/in-development.component';
import { ClientesComponent } from './clientes/clientes.component';


const routes: Routes = [
  { path: '', component: InDevelopmentComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'fluxocaixa', component: InDevelopmentComponent },
  { path: 'faleconosco', component: InDevelopmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
