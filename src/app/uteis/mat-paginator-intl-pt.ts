import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class MatPaginatorIntlPt extends MatPaginatorIntl {

  constructor() {
    super();

    this.firstPageLabel = 'Primeira página';
    this.itemsPerPageLabel = 'Itens por página';
    this.lastPageLabel = 'Última página';
    this.nextPageLabel = 'Próxima página';
    this.previousPageLabel = 'Página anterior';

    this.getRangeLabel = (page: number, pageSize: number, length: number) => {
      const first = pageSize * page + 1;
      const last = Math.min(first + pageSize - 1, length);

      return `${first} -- ${last} de ${length}`;
    };
  }
}
