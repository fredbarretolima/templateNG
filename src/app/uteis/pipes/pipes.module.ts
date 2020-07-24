import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepPipe } from './cep.pipe';
import { CnpjPipe } from './cnpj.pipe';
import { CpfPipe } from './cpf.pipe';
import { PhonePipe } from './phone.pipe';


@NgModule({
  declarations: [CepPipe, CnpjPipe, CpfPipe, PhonePipe],
  imports: [
    CommonModule
  ],
  exports: [CepPipe, CnpjPipe, CpfPipe, PhonePipe]
})
export class PipesModule { }
