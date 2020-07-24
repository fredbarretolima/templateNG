import { Observable } from 'rxjs';
import { GenericModel } from '../model/generic';

export abstract class GenericService<M extends GenericModel> {

    abstract getOne(id: number): Observable<M>;

    abstract getAll(): Observable<M[]>;

    abstract getRange(from: number, to:number): Observable<M[]>;

    abstract save(model: M): Observable<M>;

    abstract update(model: M): Observable<M>;

    abstract delete(model: M): Observable<void>;

    abstract deleteById(id: number): Observable<void>;

    abstract getCount(): Observable<number>;

}
