import { GenericModel } from 'src/app/model/generic';

export class ColumnDef {
  header: string;
  value: (row: GenericModel) => string;
}
