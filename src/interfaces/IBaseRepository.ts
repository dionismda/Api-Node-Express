export interface IBaseRepository<T> {
    find(data: T): T[];
    findOne(id: string): T;        
    create(data: T): T;
    update(data: T): T;
    delete(data: T): boolean;    
}