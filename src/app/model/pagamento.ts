import { Prestacao } from './prestacao';
import { Generic } from './generic';

export interface Pagamento extends Generic {
    prestacao: Prestacao;
    data: Date;
    valor: number;
    multa: number;
    totalJuros: number;
    desconto: number;
}
