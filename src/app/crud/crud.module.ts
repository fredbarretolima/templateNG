import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListViewComponent } from './list-view/list-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ListViewComponent
  ]
})
export class CrudModule { }
