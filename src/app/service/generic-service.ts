import { Observable } from 'rxjs';
import { GenericModel } from '../model/generic';

export interface RecordRange {
    from: number;
    to: number;
}

export abstract class GenericService<M extends GenericModel> {

    protected list: M[] = [];

    private _filter: string = null;

    get filter() {
        return this.filter;
    }

    set filter(value: string) {
        this._filter = value;
    }

    clearFilter() {
        this.filter = null;
    }

    abstract getOne(id: number): Observable<M>;

    abstract getAll(): Observable<M[]>;

    abstract getRange(from: number, to:number): Observable<M[]>;

    abstract save(model: M): Observable<M>;

    abstract update(model: M): Observable<M>;

    abstract delete(model: M): Observable<void>;

    abstract deleteById(id: number): Observable<void>;

    abstract recoverById(id: number): Observable<M>;

    abstract getCount(): Observable<number>;

}
