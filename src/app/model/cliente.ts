import { Endereco } from './endereco';
import { GenericModel } from './generic';

export interface Cliente extends GenericModel {

    nome?: string;

    cpf?: string;

    telefone1?: string;

    telefone2?: string;

    endereco?: Endereco;

}
