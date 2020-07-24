import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntlPt } from "../uteis/mat-paginator-intl-pt";
import { CepPipe } from './pipes/cep.pipe';
import { CnpjPipe } from './pipes/cnpj.pipe';
import { CpfPipe } from './pipes/cpf.pipe';
import { PhonePipe } from './pipes/phone.pipe';



@NgModule({
  declarations: [
    CpfPipe, CnpjPipe, CepPipe, PhonePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [CpfPipe, CnpjPipe, CepPipe, PhonePipe],
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorIntlPt }],
})
export class UteisModule { }
