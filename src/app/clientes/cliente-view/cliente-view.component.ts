import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from 'src/app/model/cliente';
import { GenericViewDialogComponent } from 'src/app/crud/generic-view-dialog/generic-view-dialog.component';

@Component({
  selector: 'app-cliente-view',
  templateUrl: './cliente-view.component.html',
  styleUrls: ['./cliente-view.component.scss']
})
export class ClienteViewComponent extends GenericViewDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public cliente: Cliente) { 
    super();
  }

  ngOnInit(): void {
  }

}
