import { Cliente } from './cliente';
import { PeriodoEnum } from './enum/periodo-enum.enum';
import { Generic } from './generic';

export interface Emprestimo extends Generic {
    cliente: Cliente;
    data: Date;
    valor: number;
    parcelas: number;
    vencimentoPrimeiraParcela: Date;
    frequenciaParcelas: PeriodoEnum;
    taxaJurosMensal: number;
    taxaMultaMensal: number;
}
