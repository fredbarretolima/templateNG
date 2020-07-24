import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { LayoutModule } from '../layout/layout.module';
import { PipesModule } from '../uteis/pipes/pipes.module';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ClienteViewComponent } from './cliente-view/cliente-view.component';
import { ClientesComponent } from './clientes.component';


@NgModule({
  declarations: [
    ClientesComponent, 
    ClienteViewComponent, 
    ClienteEditComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    LayoutModule,
    PipesModule
  ],
  exports: [
    ClientesComponent
  ]
})
export class ClientesModule { }
