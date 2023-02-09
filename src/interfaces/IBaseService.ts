export interface IBaseService<T> {    
    create(data: T): T;
    update(id: string, data: T): T;
    delete(id: string): boolean;    
}