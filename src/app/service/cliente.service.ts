import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from '../model/cliente';
import { Endereco } from '../model/endereco';
import { GenericService } from './generic-service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService implements GenericService<Cliente> {

  private address: Endereco = {
    bairro: 'Bairro',
    cep: '69000000',
    cidade: 'Cidade',
    logradouro: 'Rua das casas',
    numero: 'S/N',
    referencia: 'referenciamento',
    uf: 'UH'
  }

  private cliente: Cliente = {
    id: 1,
    cpf: '99999999999',
    nome: 'Mxoral Aweaji Waildaur',
    telefone1: '9912345678',
    telefone2: '99987654321',
    endereco: this.address
  }

  private clientes: Cliente[] = [];

  constructor() {
    for (let i = 1; i < 1000; i++) {
      let cliente: Cliente = {};
      Object.assign(cliente, this.cliente);
      cliente.id = i;
      this.clientes.push(cliente);
    }
  }

  
  getOne(id: number): Observable<Cliente> {
    return of(this.clientes.find(cliente => (cliente.id == id)));
  }
  
  getAll(): Observable<Cliente[]> {
    return of(this.clientes);
  }
  
  getRange(page: number, pageSize: number): Observable<Cliente[]> {
    let start = page * pageSize;
    let end = start + pageSize;
    return of(this.clientes.slice(start, Math.min(end, this.clientes.length)));
  }

  save(model: Cliente): Observable<Cliente> {
    return this.getOne(model.id);
  }

  update(model: Cliente): Observable<Cliente> {
    return this.save(model);
  }

  delete(model: Cliente): Observable<void> {
    return of();
  }

  deleteById(id: number): Observable<void> {
    return of();
  }

  getCount(): Observable<number> {
    return of(this.clientes.length);
  }


}
