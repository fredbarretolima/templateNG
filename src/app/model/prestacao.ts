import { Generic } from './generic';

export interface Prestacao extends Generic {
    emprestimo: number;
    parcela: number;
    vencimento: Date;
    valor: number;
    multaAtraso: number;
    jurosDiarioAtraso: number;
}
