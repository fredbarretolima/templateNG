import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ColumnDef } from "../crud/list-view/column-def";
import { ListViewComponent } from '../crud/list-view/list-view.component';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { CpfPipe } from '../uteis/pipes/cpf.pipe';
import { PhonePipe } from '../uteis/pipes/phone.pipe';
import { ClienteViewComponent } from './cliente-view/cliente-view.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';

@Component({
  selector: 'app-clientes',
  templateUrl: '../crud/list-view/list-view.component.html',
  styleUrls:  ['../crud/list-view/list-view.component.scss']
})
export class ClientesComponent extends ListViewComponent<Cliente> {

  cpfPipe = new CpfPipe();
  fonePipe = new PhonePipe();
  cliente: Cliente;

  cols: ColumnDef[] = [
    {
      header: "Nome",
      value: (cliente: Cliente) => (cliente.nome.trim())
    },
    {
      header: "CPF",
      value: (cliente: Cliente) => (this.cpfPipe.transform(cliente.cpf))
    },
    {
      header: "Telefone1",
      value: (cliente: Cliente) => (this.fonePipe.transform(cliente.telefone1))
    },
    {
      header: "Telefone2",
      value: (cliente: Cliente) => (this.fonePipe.transform(cliente.telefone2))
    }
  ];

  constructor(
    service: ClienteService,
    dialog: MatDialog
  ) {
    super(service, dialog);
    this.name = "Lista de Clientes";
  }

  openView(): MatDialogRef<ClienteViewComponent> {
    return this.dialog.open(ClienteViewComponent, { data: this.model });
  }
  
  openEdit() {
    return this.dialog.open(ClienteEditComponent, { data: this.model });
  }

}
