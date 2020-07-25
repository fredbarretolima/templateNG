import { AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { GenericModel } from 'src/app/model/generic';
import { GenericService } from 'src/app/service/generic-service';
import { GenericEditDialogComponent } from '../generic-edit-dialog/generic-edit-dialog.component';
import { GenericViewDialogComponent } from '../generic-view-dialog/generic-view-dialog.component';
import { ColumnDef } from './column-def';

export class ListViewComponent<Model extends GenericModel> implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public name: string;

  public cols: ColumnDef[];

  public headers: string[];

  public values: Model[];

  public resultsLength: number = 0;

  protected model: Model;

  constructor(
    protected service: GenericService<Model>,
    protected dialog: MatDialog
  ) { }

  ngAfterViewInit(): void {
    setTimeout(() => this.onPageChange({
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      length: 0
    }), 100);
  }

  ngOnInit(): void {
    this.service.getCount().subscribe(
      length => this.resultsLength = length
    );

    this.headers = this.cols.map(col => col.header);
  }

  value(model: Model, header: string) {
    let col = this.cols.find(col => col.header == header);
    return col.value(model);
  }

  onPageChange($event: PageEvent) {
    console.log('onPageChange');

    this.service.getRange($event.pageIndex, $event.pageSize).subscribe(
      data => this.values = data
    );
  }

  view(model: Model) {
    this.service.getOne(model.id).subscribe(
      result => {
        this.model = result;
        this.openView().afterClosed().subscribe(
          result => this.onViewClosed(result)
        )
      }
    )
  }

  edit(model: Model) {
    this.service.getOne(model.id).subscribe(
      result => {
        this.model = result;
        this.openEdit().afterClosed().subscribe(
          result => this.onEditClosed(result)
        )
      }
    )
  }

  openView(): MatDialogRef<GenericViewDialogComponent> {
    return this.dialog.open(GenericViewDialogComponent);
  }

  onViewClosed(result: string) {
    if (result == "edit") {
      this.edit(this.model);
    }
  }

  openEdit(): MatDialogRef<GenericEditDialogComponent> {
    return this.dialog.open(GenericEditDialogComponent);
  }
  
  onEditClosed(result: string) {
    console.log(`Edit Dialog result: ${result}`);
  }
}


