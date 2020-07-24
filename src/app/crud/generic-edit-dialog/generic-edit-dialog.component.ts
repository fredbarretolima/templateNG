import { Component, OnInit, Inject } from '@angular/core';
import { GenericModel } from 'src/app/model/generic';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-generic-edit-dialog',
  templateUrl: './generic-edit-dialog.component.html',
  styleUrls: ['./generic-edit-dialog.component.scss']
})
export class GenericEditDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
