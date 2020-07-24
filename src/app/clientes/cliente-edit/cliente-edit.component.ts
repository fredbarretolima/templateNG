import { Component, OnInit, Inject } from '@angular/core';
import { GenericEditDialogComponent } from 'src/app/crud/generic-edit-dialog/generic-edit-dialog.component';
import { Cliente } from 'src/app/model/cliente';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.scss']
})
export class ClienteEditComponent extends GenericEditDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public cliente: Cliente) {
    super();
  }

  ngOnInit(): void {
  }

}
