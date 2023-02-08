export interface IBaseRepository<T> {
    find(item: T): Promise<T[]>;
    findOne(id: string): Promise<T>;        
    create(item: T): Promise<T>;
    update(id: string, item: T): Promise<T>;
    delete(id: string): Promise<boolean>;    
}