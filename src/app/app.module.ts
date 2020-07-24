import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { FluxoCaixaComponent } from './fluxo-caixa/fluxo-caixa.component';
import { LayoutModule } from './layout/layout.module';
import { ClientesModule } from './clientes/clientes.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FluxoCaixaComponent,
    FaleConoscoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    AppRoutingModule,
    LayoutModule,
    ClientesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
